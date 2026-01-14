import 'package:flutter_lucide/flutter_lucide.dart';





import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../home_screen.dart';
import '../track_screen.dart';
import '../routines_screen.dart';
import '../chat_screen.dart';
import '../profile_screen.dart';
import '../../widgets/quick_actions_fab.dart';

class MainLayout extends StatefulWidget {
  final int initialIndex;
  const MainLayout({super.key, this.initialIndex = 0});

  @override
  State<MainLayout> createState() => _MainLayoutState();
}

class _MainLayoutState extends State<MainLayout> {
  late int _selectedIndex;

  final List<Widget> _screens = [
    const HomeScreen(),
    const TrackScreen(),
    const RoutinesScreen(),
    const ChatScreen(),
    const ProfileScreen(),
  ];

  @override
  void initState() {
    super.initState();
    _selectedIndex = widget.initialIndex;
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_selectedIndex],
      floatingActionButton: const QuickActionsFAB(),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: Colors.black,
          border: Border(
            top: BorderSide(color: Colors.white.withValues(alpha: 0.05), width: 1),
          ),
        ),
        child: BottomNavigationBar(
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
          type: BottomNavigationBarType.fixed,
          backgroundColor: Colors.black,
          selectedItemColor: const Color(0xFF10B981),
          unselectedItemColor: const Color(0xFF71717A),
          showSelectedLabels: true,
          showUnselectedLabels: true,
          selectedLabelStyle: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold),
          unselectedLabelStyle: const TextStyle(fontSize: 10),
          items: [
            BottomNavigationBarItem(
              icon: Icon(LucideIcons.house),
              label: 'HOME',
            ),
            BottomNavigationBarItem(
              icon: Icon(LucideIcons.activity),
              label: 'TRACK',
            ),
            BottomNavigationBarItem(
              icon: Icon(LucideIcons.play),
              label: 'TRAINING',
            ),
            BottomNavigationBarItem(
              icon: Icon(LucideIcons.message_circle),
              label: 'CARE',
            ),
            BottomNavigationBarItem(
              icon: Icon(LucideIcons.user),
              label: 'PROFILE',
            ),
          ],
        ),
      ),
    );
  }
}
