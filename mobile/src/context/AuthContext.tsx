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
        androidClientId: "812140332824-u06060101010101010101.apps.googleusercontent.com", // REPLACE WITH ENV VAR
        iosClientId: "812140332824-ios-client-id.apps.googleusercontent.com", // REPLACE WITH ENV VAR
        webClientId: "812140332824-web-client-id.apps.googleusercontent.com", // REPLACE WITH ENV VAR
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
            // For now, we'll fetch profile info directly from Google
            if (authentication?.accessToken) {
                fetchGoogleUserProfile(authentication.accessToken);
            }
        }
    }, [response]);

    const fetchGoogleUserProfile = async (token: string) => {
        try {
            const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const user = await response.json();

            // Map Google user to our User type
            const appUser: User = {
                id: user.id,
                email: user.email,
                name: user.name,
                picture: user.picture,
                token: token
            };

            await signIn(token, appUser);
        } catch (error) {
            console.error("Failed to fetch user data", error);
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
