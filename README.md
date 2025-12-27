# 🌿 GlowUp Hub 
### Health is Self-Trust Made Visible.

**GlowUp Hub** is a premium, all-in-one ecosystem designed for **Sustainable Weight Loss** and **Metabolic Health**. Moving beyond temporary fixes, it empowers users to build lasting health through data-driven nutrition, habit stacking, and immersive activity protocols.

[![Deployment Status](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Framework-Next.js_15-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![Expo](https://img.shields.io/badge/Mobile-Expo_52-4630EB?style=flat-square&logo=expo)](https://expo.dev)
[![Prisma](https://img.shields.io/badge/Database-Prisma-2D3748?style=flat-square&logo=prisma)](https://prisma.io)

---

## ✨ Core Pillars

### 🍎 Metabolic Nutrition
*   **Smart Macro Tracking**: Personalized targets based on age, gender, and activity level.
*   **Expert Access**: Direct consultation system for personalized meal planning and feedback.
*   **Ritual Integration**: Connect daily habits directly to your nutritional goals.

### 🏃 Activity for Life
*   **Immersive Protocols**: Step-by-step guided sessions for Walking, Yoga, and Home Workouts.
*   **Scientific Burn Estimation**: MET-based calorie calculations for precision tracking.
*   **Activity Calendar**: Visual progress tracking to build consistency.

### 🧠 Mindset Shift
*   **Glow Score**: A holistic metric that tracks adherence to "Self-Trust" rather than just physical metrics.
*   **Streak Protection**: Psychological triggers designed to encourage long-term commitment.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend (Web)** | Next.js 15 (App Router), Tailwind CSS, Framer Motion |
| **Mobile App** | React Native (Expo 52), NativeWind (Tailwind), Lucide Icons |
| **Backend** | Next.js API Routes, NextAuth.js v5 |
| **Database** | PostgreSQL (Neon), Prisma ORM |
| **Monitoring** | Sentry (Error Tracking & Performance) |

---

## 📂 Project Structure

```text
glowuphub/
├── web/        # Next.js Full-Stack Application
├── mobile/     # Expo React Native Application
└── DEPLOYMENT_GUIDE.md # Root-level launch instructions
```

---

## 🚀 Quick Start: Web Deployment

The web version is optimized for **Vercel**.

1.  **Clone & Install**:
    ```bash
    cd web
    npm install
    ```
2.  **Environment Variables**: Create a `.env` file with:
    - `DATABASE_URL`: Your PostgreSQL connection string.
    - `AUTH_SECRET`: Random secure string for authentication.
3.  **Deploy**:
    - Import the `/web` directory in Vercel.
    - The build command is pre-configured: `prisma generate && next build`.

---

## 📱 Quick Start: Mobile Development

Ensure you have the Expo Go app installed on your device.

1.  **Install**:
    ```bash
    cd mobile
    npm install
    ```
2.  **Run**:
    ```bash
    npx expo start
    ```

---

## 📄 License
Registered for private use under the GlowUp Hub developmental framework.
