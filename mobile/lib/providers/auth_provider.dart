import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class User {
  final String id;
  final String name;
  final String email;
  final int glowScore;

  User({
    required this.id,
    required this.name,
    required this.email,
    this.glowScore = 85,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      email: json['email'] ?? '',
      glowScore: json['glowScore'] ?? 85,
    );
  }
}

class AuthProvider extends ChangeNotifier {
  User? _user;
  bool _isLoading = true;

  User? get user => _user;
  bool get isLoading => _isLoading;
  bool get isAuthenticated => _user != null;

  AuthProvider() {
    _loadUser();
  }

  Future<void> _loadUser() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('auth_token');
    // In a real app, we would verify the token here
    if (token != null) {
      // For now, let's pretend we have a user
      _user = User(id: '1', name: 'Demo User', email: 'demo@glowup.com');
    }
    _isLoading = false;
    notifyListeners();
  }

  Future<void> login(String token, Map<String, dynamic> userData) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('auth_token', token);
    _user = User.fromJson(userData);
    notifyListeners();
  }

  Future<void> demoSignIn() async {
    _user = User(id: 'guest', name: 'Guest', email: 'guest@glowup.com', glowScore: 85);
    notifyListeners();
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('auth_token');
    _user = null;
    notifyListeners();
  }
}
