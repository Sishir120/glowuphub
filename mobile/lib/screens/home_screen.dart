import 'package:flutter/material.dart';
import 'package:flutter_lucide/flutter_lucide.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../widgets/bio_digital_twin.dart';
import '../widgets/activity_rings.dart';
import '../widgets/streak_tracker.dart';
import '../widgets/lifestyle_rituals.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final user = context.watch<AuthProvider>().user;
    final firstName = user?.name.split(' ').first ?? 'Member';

    return Scaffold(
      backgroundColor: const Color(0xFF09090B),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 32),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Mobile-First Header
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 6,
                        height: 6,
                        decoration: const BoxDecoration(
                          color: Color(0xFF10B981),
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 8),
                      const Text(
                        'OFFICIAL MOBILE PORTAL',
                        style: TextStyle(
                          fontSize: 9,
                          fontWeight: FontWeight.w900,
                          letterSpacing: 2.0,
                          color: Color(0xFF10B981),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Welcome,',
                    style: TextStyle(
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                      color: Colors.white.withValues(alpha: 0.9),
                      height: 1.1,
                    ),
                  ),
                  Text(
                    '$firstName.',
                    style: const TextStyle(
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF10B981),
                      height: 1.1,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 48),

              // Activity Rings Section
              const Center(
                child: ActivityRings(
                  move: 0.8,
                  glow: 0.65,
                  mind: 0.9,
                  size: 240,
                ),
              ),

              const SizedBox(height: 48),

              // Streak Tracker
              const StreakTracker(),

              const SizedBox(height: 48),

              // Bio-Digital Twin
              const BioDigitalTwin(),

              const SizedBox(height: 48),

              // Lifestyle Rituals
              const LifestyleRituals(),

              const SizedBox(height: 48),

              // Footer Note
              Center(
                child: Column(
                  children: [
                    Container(
                      width: double.infinity,
                      height: 1,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [
                            Colors.transparent,
                            Colors.white.withValues(alpha: 0.1),
                            Colors.transparent,
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 24),
                    const Text(
                      'TRUSTED BY 10,000+ MEMBERS WORLDWIDE',
                      style: TextStyle(
                        fontSize: 8,
                        fontWeight: FontWeight.w900,
                        letterSpacing: 3.0,
                        color: Colors.white24,
                      ),
                    ),
                  ],
                ),
              ),
              
              const SizedBox(height: 64),
            ],
          ),
        ),
      ),
    );
  }
}
