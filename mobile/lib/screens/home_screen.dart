import 'package:flutter/material.dart';
import 'package:flutter_lucide/flutter_lucide.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import '../widgets/streak_tracker.dart';
import '../widgets/daily_briefing_card.dart';
import '../widgets/habit_list.dart';
import '../services/feed_service.dart';
import '../models/feed_model.dart';
import '../widgets/premium_card.dart';
import '../widgets/weight_trend_card.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final FeedService _feedService = FeedService();
  late Future<Feed> _feedFuture;

  @override
  void initState() {
    super.initState();
    _loadFeed();
  }

  void _loadFeed() {
    final token = context.read<AuthProvider>().token ?? '';
    _feedFuture = _feedService.getDailyFeed(token);
  }

  @override
  Widget build(BuildContext context) {
    final user = context.watch<AuthProvider>().user;
    final firstName = user?.name.split(' ').first ?? 'Member';
    final isPremium = user?.subscription == 'PREMIUM';

    return Scaffold(
      backgroundColor: const Color(0xFF09090B),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 32),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Mobile-First Header
              _buildHeader(firstName, isPremium, user?.coachName),

              const SizedBox(height: 32),

              // Future Builder for Feed Content
              FutureBuilder<Feed>(
                future: _feedFuture,
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator(color: Color(0xFF10B981)));
                  }
                  
                  if (snapshot.hasError) {
                    return _buildErrorState();
                  }

                  if (!snapshot.hasData) {
                     return const Text("No data available", style: TextStyle(color: Colors.white));
                  }

                  final feed = snapshot.data!;

                  return Column(
                    children: [
                      // 1. Daily Ritual (Briefing)
                      DailyBriefingCard(
                        ritual: feed.ritual,
                        phase: feed.phase,
                      ),

                      if (!isPremium) ...[
                        const SizedBox(height: 32),
                        const PremiumCard(),
                      ],

                      const SizedBox(height: 32),

                      // 2. Identity Focus (Text)
                      Text(
                        '"${feed.identityFocus}"',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.8),
                          fontSize: 16,
                          fontStyle: FontStyle.italic,
                        ),
                      ),

                      const SizedBox(height: 32),

                      // 3. Habits
                      HabitList(
                        habits: feed.habits,
                        onToggle: (id) {
                          // TODO: Call API to toggle completion
                          // For now, setState if we were managing list locally, but it's in Future.
                          // Best pattern: Optimistic update or refresh.
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Habit logged! (Mock)')),
                          );
                        },
                      ),

                      const SizedBox(height: 48),

                      // 4. Weight Trend (Visual Summary)
                      Center(
                        child: WeightTrendCard(
                          currentWeight: user?.currentWeight ?? 74.2,
                          startWeight: 75.5,
                        ),
                      ),
                      
                      const SizedBox(height: 48),
                      
                      // 5. Testimonial Injection
                      if (feed.testimonial != null)
                        Container(
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            border: Border.all(color: Colors.white10),
                            borderRadius: BorderRadius.circular(16),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Icon(LucideIcons.quote, color: Colors.white24, size: 20),
                              const SizedBox(height: 8),
                              Text(
                                feed.testimonial!.content,
                                style: const TextStyle(color: Colors.white70, fontSize: 13),
                              ),
                              const SizedBox(height: 8),
                              Text(
                                "- ${feed.testimonial!.author}",
                                style: const TextStyle(color: Color(0xFF10B981), fontSize: 11, fontWeight: FontWeight.bold),
                              ),
                            ],
                          ),
                        ),
                    ],
                  );
                },
              ),

              const SizedBox(height: 48),

              // Streak Tracker (Keep existing logic or integrate)
              const StreakTracker(),

              const SizedBox(height: 48),

              // Footer
              _buildFooter(),
              
              const SizedBox(height: 64),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader(String firstName, bool isPremium, String? coachName) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
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
                Text(
                  isPremium ? 'PREMIUM MEMBER' : 'FREE ACCOUNT',
                  style: TextStyle(
                    fontSize: 9,
                    fontWeight: FontWeight.w900,
                    letterSpacing: 2.0,
                    color: isPremium ? const Color(0xFF10B981) : Colors.white24,
                  ),
                ),
              ],
            ),
            if (isPremium && coachName != null)
              Container(
                 padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                 decoration: BoxDecoration(
                   color: const Color(0xFF18181B),
                   borderRadius: BorderRadius.circular(12),
                   border: Border.all(color: Colors.white10),
                 ),
                 child: Row(
                   children: [
                     const Icon(LucideIcons.user_check_2, size: 12, color: Colors.white54),
                     const SizedBox(width: 6),
                     Text('Coach $coachName', style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.bold)),
                   ],
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
            color: Colors.white.withOpacity(0.9),
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
    );
  }

  Widget _buildErrorState() {
     return Center(
       child: Column(
         children: [
           const Icon(Icons.error_outline, color: Colors.red),
           const SizedBox(height: 8),
           const Text("Could not load daily briefing.", style: TextStyle(color: Colors.white)),
           TextButton(onPressed: _loadFeed, child: const Text("Retry"))
         ],
       ),
     );
  }

  Widget _buildFooter() {
    return Center(
      child: Column(
        children: [
          Container(
            width: double.infinity,
            height: 1,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [
                  Colors.transparent,
                  Colors.white.withOpacity(0.1),
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
    );
  }
}
