import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:go_router/go_router.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  final List<OnboardingData> _pages = [
    OnboardingData(
      title: 'Digital Twin',
      description: 'Your bio-metrics visualized in real-time. Understand your body like never before.',
      image: 'assets/onboarding/twin.png', // Placeholder
    ),
    OnboardingData(
      title: 'Smart Tracking',
      description: 'Protocols crafted for your specific goals. Every step counts toward your glow.',
      image: 'assets/onboarding/track.png', // Placeholder
    ),
    OnboardingData(
      title: 'Expert Care',
      description: 'Connect with our care team anytime. We are with you every step of the way.',
      image: 'assets/onboarding/care.png', // Placeholder
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          PageView.builder(
            controller: _pageController,
            onPageChanged: (index) => setState(() => _currentPage = index),
            itemCount: _pages.length,
            itemBuilder: (context, index) {
              return Padding(
                padding: const EdgeInsets.all(40),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      height: 300,
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: const Color(0xFF18181B),
                        borderRadius: BorderRadius.circular(40),
                      ),
                      child: const Center(
                        child: Icon(Icons.auto_awesome, color: Color(0xFF10B981), size: 100),
                      ),
                    ).animate().fade(duration: 800.ms).scale(delay: 200.ms),
                    const SizedBox(height: 60),
                    Text(
                      _pages[index].title,
                      style: const TextStyle(fontSize: 32, fontWeight: FontWeight.w900),
                    ).animate().slideY(begin: 0.3, curve: Curves.easeOutCirc),
                    const SizedBox(height: 20),
                    Text(
                      _pages[index].description,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white.withValues(alpha: 0.6),
                        fontSize: 16,
                        height: 1.6,
                      ),
                    ).animate().fadeIn(delay: 400.ms),
                  ],
                ),
              );
            },
          ),
          Positioned(
            bottom: 60,
            left: 40,
            right: 40,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: List.generate(
                    _pages.length,
                    (index) => Container(
                      margin: const EdgeInsets.only(right: 8),
                      width: _currentPage == index ? 24 : 8,
                      height: 8,
                      decoration: BoxDecoration(
                        color: _currentPage == index ? const Color(0xFF10B981) : Colors.white.withValues(alpha: 0.2),
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ),
                  ),
                ),
                GestureDetector(
                  onTap: () {
                    if (_currentPage < _pages.length - 1) {
                      _pageController.nextPage(duration: 400.ms, curve: Curves.easeInOut);
                    } else {
                      context.go('/login');
                    }
                  },
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                    decoration: BoxDecoration(
                      color: const Color(0xFF10B981),
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Text(
                      _currentPage == _pages.length - 1 ? 'GET STARTED' : 'NEXT',
                      style: const TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class OnboardingData {
  final String title;
  final String description;
  final String image;

  OnboardingData({required this.title, required this.description, required this.image});
}
