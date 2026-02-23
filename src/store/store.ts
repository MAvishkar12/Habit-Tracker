import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

export interface Habit {
  id: number;
  name: string;
  frequency: "daily" | "weekly";
  completionData: string[];
  credatedAt: string;
}

interface HabitsState {
  habits: Habit[];
  streak: number;
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit: (id: number) => void;
  toggleHabit: (id: number, date: string) => void;
  calculateStreak: () => void;
}

const useHabitStore = create<HabitsState>()(
  devtools(
    persist<HabitsState>(
      (set, get) => ({
        habits: [],
        streak: 0,

        addHabit: (name, frequency) =>
          set((state) => ({
            habits: [
              ...state.habits,
              {
                id: Date.now(),
                name,
                frequency,
                completionData: [],
                credatedAt: new Date().toISOString(),
              },
            ],
          })),

        removeHabit: (id) =>
          set((state) => ({
            habits: state.habits.filter((habit) => habit.id !== id),
          })),

        toggleHabit: (id, date) =>
          set((state) => ({
            habits: state.habits.map((habit) =>
              habit.id === id
                ? {
                    ...habit,
                    completionData: habit.completionData.includes(date)
                      ? habit.completionData.filter((d) => d !== date)
                      : [...habit.completionData, date],
                  }
                : habit
            ),
          })),

        calculateStreak: () => {
          const habits = get().habits;
          let streak = 0;

          habits.forEach((habit) => {
            streak += habit.completionData.length;
          });

          set({ streak });
        },
      }),
      {
        name: "habits-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useHabitStore;