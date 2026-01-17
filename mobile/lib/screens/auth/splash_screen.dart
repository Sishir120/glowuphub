import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:flutter_lucide/flutter_lucide.dart';
import '../../providers/auth_provider.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    _navigateToNext();
  }

  Future<void> _navigateToNext() async {
    // Wait for animation and auth check
    await Future.delayed(const Duration(milliseconds: 3000));
    
    if (!mounted) return;
    
    final authProvider = context.read<AuthProvider>();
    
    if (authProvider.isAuthenticated) {
      context.go('/home');
    } else {
      context.go('/login');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF09090B),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Logo Animation
            Container(
              width: 100,
              height: 100,
              decoration: BoxDecoration(
                color: const Color(0xFF10B981).withOpacity(0.1),
                borderRadius: BorderRadius.circular(24),
                border: Border.all(color: const Color(0xFF10B981).withOpacity(0.2)),
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFF10B981).withOpacity(0.1),
                    blurRadius: 40,
                    spreadRadius: 10,
                  ),
                ],
              ),
              child: const Icon(
                LucideIcons.sparkles,
                color: Color(0xFF10B981),
                size: 48,
              ),
            )
            .animate()
            .scale(duration: 800.ms, curve: Curves.easeOutBack)
            .fadeIn(duration: 600.ms)
            .shimmer(delay: 1000.ms, duration: 1500.ms, color: Colors.white24)
            .animate(onPlay: (controller) => controller.repeat(reverse: true))
            .boxShadow(
              end: BoxShadow(
                blurRadius: 20, 
                color: const Color(0xFF10B981).withOpacity(0.2)
              )
            ),
            
            const SizedBox(height: 32),
            
            // Text Animation
            const Text(
              'GlowUpHub',
              style: TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: Colors.white,
                letterSpacing: -1,
              ),
            )
            .animate()
            .fadeIn(delay: 400.ms, duration: 800.ms)
            .slideY(begin: 0.3, end: 0, curve: Curves.easeOutCubic),
            
            const SizedBox(height: 8),
            
            Text(
              'Your Biological Sanctuary',
              style: TextStyle(
                fontSize: 14,
                color: Colors.white.withOpacity(0.4),
                fontWeight: FontWeight.w500,
                letterSpacing: 2,
              ),
            )
            .animate()
            .fadeIn(delay: 800.ms, duration: 800.ms),
          ],
        ),
      ),
    );
  }
}
