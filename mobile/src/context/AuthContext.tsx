import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';
import { API_URL } from '../config';

// Complete auth session if app was opened via deep link
WebBrowser.maybeCompleteAuthSession();

type User = {
    id: string;
    email: string;
    name: string;
    picture?: string;
    token?: string;
};

type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    signIn: (token: string, userData: User) => Promise<void>;
    signOut: () => Promise<void>;
    promptGoogleSignIn: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    signIn: async () => { },
    signOut: async () => { },
    promptGoogleSignIn: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
        webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
        redirectUri: makeRedirectUri({
            scheme: 'glowuphub'
        }),
    });

    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                const userJson = await AsyncStorage.getItem('user');
                if (userJson) {
                    setUser(JSON.parse(userJson));
                }
            } catch (e) {
                console.error('Failed to load user', e);
            } finally {
                setIsLoading(false);
            }
        };

        bootstrapAsync();
    }, []);

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            // Send id_token or access_token to backend for verification
            if (authentication?.accessToken) {
                fetchGoogleUserProfile(authentication.accessToken);
            }
        }
    }, [response]);

    const fetchGoogleUserProfile = async (token: string) => {
        try {
            // Exchange Google Token for App Session Token via Backend
            const response = await fetch(`${API_URL}/auth/mobile/google`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });

            if (!response.ok) {
                console.error("Backend login failed", response.status);
                // Optional: Show error toast here
                return;
            }

            const data = await response.json();

            // Map User type
            const appUser: User = {
                id: data.user.id,
                email: data.user.email,
                name: data.user.name,
                picture: data.user.image || data.user.picture,
                token: data.token // This is the App JWT
            };

            await signIn(data.token, appUser);
        } catch (error) {
            console.error("Failed to authenticate with backend", error);
        }
    };

    const signIn = async (token: string, userData: User) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.error("Sign in error", error);
        }
    };

    const signOut = async () => {
        try {
            await AsyncStorage.removeItem('user');
            setUser(null);
        } catch (error) {
            console.error("Sign out error", error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                signIn,
                signOut,
                promptGoogleSignIn: async () => {
                    await promptAsync();
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
