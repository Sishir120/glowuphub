import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:google_sign_in/google_sign_in.dart';

import '../models/user_model.dart';


class AuthProvider extends ChangeNotifier {
  final GoogleSignIn _googleSignIn = GoogleSignIn();
  User? _user;
  bool _isLoading = true;
  
  // Provisional Onboarding Data
  String? _tempIdentity;
  Map<String, bool>? _tempBarriers;
  String? _token;

  User? get user => _user;
  String? get token => _token;
  bool get isLoading => _isLoading;
  bool get isAuthenticated => _user != null;

  AuthProvider() {
    _loadUser();
  }

  Future<void> _loadUser() async {
    final prefs = await SharedPreferences.getInstance();
    _token = prefs.getString('auth_token');
    // In a real app, we would verify the token here
    if (_token != null) {
      // For now, let's pretend we have a user
      _user = User(id: '1', name: 'Demo User', email: 'demo@glowup.com');
    }
    _isLoading = false;
    notifyListeners();
  }

  Future<void> login(String token, Map<String, dynamic> userData) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('auth_token', token);
    _token = token;
    _user = User.fromJson(userData);
    notifyListeners();
  }

  Future<void> demoSignIn() async {
    _user = User(id: 'guest', name: 'Guest', email: 'guest@glowup.com', glowScore: 85);
    notifyListeners();
  }

  Future<void> signInWithGoogle() async {
    try {
      final GoogleSignInAccount? googleUser = await _googleSignIn.signIn();
      if (googleUser != null) {
        // Successful sign-in
        final GoogleSignInAuthentication googleAuth = await googleUser.authentication;
        final String? accessToken = googleAuth.accessToken;
        final String? idToken = googleAuth.idToken;

        // In a real app, you would verify these tokens with your backend
        // For now, we'll just create a session locally
        
        final prefs = await SharedPreferences.getInstance();
        if (accessToken != null) {
          await prefs.setString('auth_token', accessToken);
        }

        _user = User(
          id: googleUser.id,
          name: googleUser.displayName ?? 'Unknown',
          email: googleUser.email,
          glowScore: 85,
        );
        notifyListeners();
      }
    } catch (error) {
      // ignore: avoid_print
      print('Google Sign-In Error: $error');
      rethrow;
    }
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('auth_token');
    await _googleSignIn.signOut();
    _user = null;
    notifyListeners();
  }

  void setProvisionalIdentity(String identity) {
    _tempIdentity = identity;
    notifyListeners();
  }

  void setProvisionalBarriers(Map<String, bool> barriers) {
    _tempBarriers = barriers;
    notifyListeners();
  }
}
