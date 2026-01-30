import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import '../../providers/auth_provider.dart';

class PsychProfileScreen extends StatefulWidget {
  const PsychProfileScreen({super.key});

  @override
  State<PsychProfileScreen> createState() => _PsychProfileScreenState();
}

class _PsychProfileScreenState extends State<PsychProfileScreen> {
  final Map<String, bool> _barriers = {
    "Lack of time": false,
    "Stress eating": false,
    "Inconsistent motivation": false,
    "Social pressure": false,
    "Perfectionism": false,
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 40),
              const Text(
                "What holds you back?",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  height: 1.2,
                ),
              ).animate().fadeIn(),
              const SizedBox(height: 16),
              const Text(
                "We use psychology to turn these barriers into bridges.",
                style: TextStyle(
                  color: Colors.grey,
                  fontSize: 16,
                ),
              ),
              const SizedBox(height: 40),
              Expanded(
                child: ListView(
                  children: _barriers.keys.map((barrier) {
                    final isSelected = _barriers[barrier]!;
                    return GestureDetector(
                      onTap: () {
                        setState(() {
                          _barriers[barrier] = !isSelected;
                        });
                      },
                      child: Container(
                        margin: const EdgeInsets.only(bottom: 12),
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: isSelected ? const Color(0xFF10B981).withOpacity(0.1) : const Color(0xFF18181B),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: isSelected ? const Color(0xFF10B981) : Colors.transparent,
                          ),
                        ),
                        child: Row(
                          children: [
                            Icon(
                              isSelected ? Icons.check_box : Icons.check_box_outline_blank,
                              color: isSelected ? const Color(0xFF10B981) : Colors.grey,
                            ),
                            const SizedBox(width: 12),
                            Text(
                              barrier,
                              style: const TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ).animate().fadeIn().slideX();
                  }).toList(),
                ),
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: double.infinity,
                height: 56,
                child: ElevatedButton(
                  onPressed: _barriers.values.every((v) => !v)
                      ? null
                      : () {
                          context.read<AuthProvider>().setProvisionalBarriers(_barriers);
                          context.push('/user-setup'); 
                        },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF10B981),
                    disabledBackgroundColor: const Color(0xFF27272A),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: const Text(
                    "BUILD MY PLAN",
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
