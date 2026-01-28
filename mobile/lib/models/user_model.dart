import 'identity_model.dart';

class User {
  final String id;
  final String name;
  final String email;
  final int glowScore;
  final String onboardingStage; // "NEW", "COMPLETED"
  final String currentPhase; // "ADAPTING"
  final List<IdentityStatement> identityStatements;

  User({
    required this.id,
    required this.name,
    required this.email,
    this.glowScore = 85,
    this.onboardingStage = 'NEW',
    this.currentPhase = 'ADAPTING',
    this.identityStatements = const [],
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      email: json['email'] ?? '',
      glowScore: json['glowScore'] ?? 85,
      onboardingStage: json['onboardingStage'] ?? 'NEW',
      currentPhase: json['currentPhase'] ?? 'ADAPTING',
      identityStatements: (json['identityStatements'] as List<dynamic>?)
              ?.map((e) => IdentityStatement.fromJson(e))
              .toList() ??
          [],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'glowScore': glowScore,
      'onboardingStage': onboardingStage,
      'currentPhase': currentPhase,
      'identityStatements': identityStatements.map((e) => e.toJson()).toList(),
    };
  }
}
