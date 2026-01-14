import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../screens/auth/login_screen.dart';
import '../screens/auth/register_screen.dart';
import '../screens/auth/onboarding_screen.dart';
import '../screens/main/main_layout.dart';

class AppNavigation {
  static final GoRouter router = GoRouter(
    initialLocation: '/login',
    redirect: (context, state) {
      final authProvider = context.read<AuthProvider>();
      final isPublic = state.matchedLocation == '/login' || 
                       state.matchedLocation == '/register' || 
                       state.matchedLocation == '/onboarding';

      if (authProvider.isLoading) return null;

      if (!authProvider.isAuthenticated) {
        return isPublic ? null : '/login';
      }

      if (isPublic) {
        return '/home';
      }

      return null;
    },
    routes: [
      GoRoute(
        path: '/onboarding',
        builder: (context, state) => const OnboardingScreen(),
      ),
      GoRoute(
        path: '/login',
        builder: (context, state) => const LoginScreen(),
      ),
      GoRoute(
        path: '/register',
        builder: (context, state) => const RegisterScreen(),
      ),
      GoRoute(
        path: '/home',
        builder: (context, state) => const MainLayout(initialIndex: 0),
      ),
      GoRoute(
        path: '/track',
        builder: (context, state) => const MainLayout(initialIndex: 1),
      ),
      GoRoute(
        path: '/routines',
        builder: (context, state) => const MainLayout(initialIndex: 2),
      ),
      GoRoute(
        path: '/chat',
        builder: (context, state) => const MainLayout(initialIndex: 3),
      ),
      GoRoute(
        path: '/profile',
        builder: (context, state) => const MainLayout(initialIndex: 4),
      ),
    ],
  );
}
