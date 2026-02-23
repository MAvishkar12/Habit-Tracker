## Habit Tracker Web App

A simple and intuitive web app that helps users track their daily habits and maintain streaks. Add habits, mark them as completed, and monitor your progress to stay consistent and motivated!

---

## Features

- Add and manage daily or weekly habits
- Mark habits as completed
- Track streaks and progress over time
- Responsive and user-friendly interface
- Persistent data storage using local storage (or Zustand)

---

## Demo



---
## Tech Stack

- 1.Frontend: React.js, Material UI,
- 2.State Management: Zustand
- 3.Data Storage: Local Storage
- 4.Icons: Material UI Icons

---

## Installation

1. Clone the repository:  

git clone https://github.com/your-username/habit-tracker.git

## Run Project 

1.install npm 
  npm install

2. npm run dev 

Usage of Website : 

-Add a new habit by entering a name and choosing the frequency (daily/weekly).
-Mark habits as completed by clicking the check icon.
-Monitor your streaks and progress over time.
-Remove habits you no longer want to track

Folder Structure 

habit-tracker/
├─ src/
│  ├─ components/   # React components (Form, List, etc.)
│  ├─ store/        # Zustand store for state management
│  ├─ App.tsx       # Main app component
│  └─ index.tsx     # Entry point
├─ public/
├─ package.json
└─ README.md

Upcoming Features ->>>
1.Add notifications/reminders for habits
2.Sync data with backend for multiple devices (using zustand)
3.Add analytics & charts for progress visualization
4.Dark mode toggle