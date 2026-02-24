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
<img width="769" height="425" alt="image" src="https://github.com/user-attachments/assets/bfbb1a0e-5002-4ec4-bff1-290320bf0419" />
<img width="1333" height="633" alt="image" src="https://github.com/user-attachments/assets/93208aa5-a30c-4e20-afda-1bebe63707fe" />
<img width="294" height="493" alt="image" src="https://github.com/user-attachments/assets/13c9a8c1-8004-431c-ae12-84048be19e73" />






---
## Tech Stack

- 1.Frontend: React.js, Material UI,Typescript
- 2.State Management: Zustand
- 3.Data Storage: Local Storage using Zustand 
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
