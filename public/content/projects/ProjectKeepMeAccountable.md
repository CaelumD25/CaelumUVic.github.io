KeepMeAccountable is a social accountability app for Android (iOS planned) that lets you set recurring personal goals and share your progress with a small team of people you actually trust.

I built it because after graduating, I found that without the structure of school, it was easy to let personal goals quietly slide. The app is designed to bring back a little of that accountability, not through leaderboards or streaks or gamification, but through the people already in your life.

Goals can be one of six types (Reading, Writing, Courses, Fitness, Avoidance, or Custom) and run on a Daily, Weekly, Biweekly, or Monthly cadence. Users can form small teams of up to four members, where teammates can see each other's progress within the group.

Under the hood:

*   **Flutter**: Android-first, portrait orientation, with iOS in the roadmap
*   **Supabase**: PostgreSQL, Auth (Google SSO), Edge Functions, and Cron for the backend
*   **Drift** (SQLite): offline-first local storage that syncs to Supabase in the background
*   **Firebase Cloud Messaging**: goal reminders and team invite notifications
*   **Provider**: state management
*   Row Level Security in Supabase keeps team data private

_Currently at MVP maturity, functional with a deliberately narrow feature set._

[See the files here!](https://github.com/CaelumD25)
