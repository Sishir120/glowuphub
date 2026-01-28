import 'package:flutter/material.dart';
import 'package:flutter_lucide/flutter_lucide.dart';
import '../models/habit_model.dart';

class HabitList extends StatelessWidget {
  final List<Habit> habits;
  final Function(String) onToggle;

  const HabitList({
    super.key,
    required this.habits,
    required this.onToggle,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 4),
          child: Text(
            'TODAY\'S HABITS',
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.w900,
              letterSpacing: 2.0,
              color: Colors.white30,
            ),
          ),
        ),
        const SizedBox(height: 16),
        if (habits.isEmpty)
          const Text("No active habits assigned.", style: TextStyle(color: Colors.white54)),
        
        ListView.separated(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: habits.length,
          separatorBuilder: (_, __) => const SizedBox(height: 8),
          itemBuilder: (context, index) {
            final habit = habits[index];
            return _buildHabitCard(habit);
          },
        ),
      ],
    );
  }

  Widget _buildHabitCard(Habit habit) {
    return GestureDetector(
      onTap: () => onToggle(habit.id),
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: habit.isCompletedToday
              ? const Color(0xFF10B981).withOpacity(0.05)
              : const Color(0xFF18181B),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: habit.isCompletedToday
                ? const Color(0xFF10B981).withOpacity(0.2)
                : Colors.white.withOpacity(0.05),
          ),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: [
                Container(
                  width: 32,
                  height: 32,
                  decoration: BoxDecoration(
                    color: habit.isCompletedToday
                        ? const Color(0xFF10B981)
                        : Colors.white.withOpacity(0.05),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(
                    habit.isCompletedToday ? LucideIcons.check : LucideIcons.circle,
                    size: 14,
                    color: habit.isCompletedToday ? Colors.black : Colors.white60,
                  ),
                ),
                const SizedBox(width: 12),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      habit.action,
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.bold,
                        color: habit.isCompletedToday ? const Color(0xFF10B981).withOpacity(0.7) : Colors.white,
                        decoration: habit.isCompletedToday ? TextDecoration.lineThrough : null,
                      ),
                    ),
                    Text(
                      habit.trigger.toUpperCase(),
                      style: const TextStyle(
                        fontSize: 9,
                        fontWeight: FontWeight.w900,
                        letterSpacing: 1.0,
                        color: Colors.white12,
                      ),
                    ),
                  ],
                ),
              ],
            ),
            if (habit.streak > 0)
              Row(
                children: [
                  const Icon(LucideIcons.flame, size: 12, color: Colors.orange),
                  const SizedBox(width: 4),
                  Text(
                    '${habit.streak}',
                    style: const TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.bold,
                      color: Colors.orange,
                    ),
                  ),
                ],
              ),
          ],
        ),
      ),
    );
  }
}
