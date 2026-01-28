import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import '../../providers/auth_provider.dart';

class IdentitySelectionScreen extends StatefulWidget {
  const IdentitySelectionScreen({super.key});

  @override
  State<IdentitySelectionScreen> createState() => _IdentitySelectionScreenState();
}

class _IdentitySelectionScreenState extends State<IdentitySelectionScreen> {
  String? _selectedIdentity;
  final List<String> _identities = [
    "I am an athlete in training.",
    "I am a disciplined high-achiever.",
    "I am glowing with confidence.",
    "I am a calm and centered being."
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black, // Dark mode default
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 40),
              const Text(
                "Who are you becoming?",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  height: 1.2,
                ),
              ).animate().fadeIn().slideY(begin: 0.3),
              const SizedBox(height: 16),
              const Text(
                "Select the statement that resonates with your future self.",
                style: TextStyle(
                  color: Colors.grey,
                  fontSize: 16,
                ),
              ).animate().fadeIn(delay: 200.ms),
              const SizedBox(height: 40),
              Expanded(
                child: ListView.separated(
                  itemCount: _identities.length,
                  separatorBuilder: (_, __) => const SizedBox(height: 16),
                  itemBuilder: (context, index) {
                    final isSelected = _selectedIdentity == _identities[index];
                    return GestureDetector(
                      onTap: () => setState(() => _selectedIdentity = _identities[index]),
                      child: Container(
                        padding: const EdgeInsets.all(20),
                        decoration: BoxDecoration(
                          color: isSelected ? const Color(0xFF10B981).withOpacity(0.2) : const Color(0xFF18181B),
                          border: Border.all(
                            color: isSelected ? const Color(0xFF10B981) : Colors.transparent,
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: Row(
                          children: [
                            Expanded(
                              child: Text(
                                _identities[index],
                                style: const TextStyle(
                                  color: Colors.white,
                                  fontSize: 18,
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ),
                            if (isSelected)
                              const Icon(Icons.check_circle, color: Color(0xFF10B981)),
                          ],
                        ),
                      ).animate().fadeIn(delay: (300 + (index * 100)).ms).slideX(begin: 0.1),
                    );
                  },
                ),
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: double.infinity,
                height: 56,
                child: ElevatedButton(
                  onPressed: _selectedIdentity == null
                      ? null
                      : () {
                          context.read<AuthProvider>().setProvisionalIdentity(_selectedIdentity!);
                          context.push('/psych-profile');
                        },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF10B981),
                    disabledBackgroundColor: const Color(0xFF27272A),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: const Text(
                    "CONTINUE",
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                  ),
                ),
              ).animate().fadeIn(delay: 800.ms),
            ],
          ),
        ),
      ),
    );
  }
}
