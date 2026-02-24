import { Box, Paper, Typography, Button, LinearProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

import useHabitStore from "../store/store";
import type { Habit } from "../store/store"; // Make sure your Habit interface is exported
// Make sure your Habit interface is exported

const List: React.FC = () => {
  const { habits, removeHabit, toggleHabit } = useHabitStore();
  const today = new Date().toISOString().split("T")[0];

  // Count completed habits today
  const completedToday: number = habits.reduce((acc: number, habit: Habit) => {
    if (habit.completionData.includes(today)) acc += 1;
    return acc;
  }, 0);

  // Longest streak among all habits
  const getLongestStreak = (): number => {
    let maxStreak = 0;

    habits.forEach((habit: Habit) => {
      if (habit.completionData.length === 0) return;

      const sortedDates = [...habit.completionData].sort();
      let currentStreak = 1;

      for (let i = 1; i < sortedDates.length; i++) {
        const prev = new Date(sortedDates[i - 1]);
        const curr = new Date(sortedDates[i]);
        const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

        currentStreak = diff === 1 ? currentStreak + 1 : 1;
        maxStreak = Math.max(maxStreak, currentStreak);
      }

      maxStreak = Math.max(maxStreak, currentStreak);
    });

    return maxStreak;
  };

  // Current streak for a habit
  const getStreak = (habit: Habit): number => {
    const currentDate = new Date();
    let streak = 0;

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];
      if (habit.completionData.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else break;
    }

    return streak;
  };

  return (
    <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
      {habits.map((habit: Habit) => {
        const streak: number = getStreak(habit);

        return (
          <Paper
            key={habit.id}
            sx={{
              p: 3,
              borderRadius: 3,
              background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* Left side */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, letterSpacing: 0.5 }}
                >
                  {habit.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: "uppercase",
                    color: "text.secondary",
                    fontWeight: 600,
                  }}
                >
                  {habit.frequency}
                </Typography>
              </Box>

              {/* Right side */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", sm: "flex-end" },
                  gap: 1,
                  flexWrap: "wrap",
                  mt: { xs: 1, sm: 0 }, // small margin top for mobile spacing
                }}
              >
                <Button
                  variant="contained"
                  color={
                    habit.completionData.includes(today) ? "success" : "primary"
                  }
                  startIcon={<CheckCircleIcon />}
                  onClick={() => toggleHabit(habit.id, today)}
                  sx={{ borderRadius: 2 }}
                >
                  {habit.completionData.includes(today) ? "Completed" : "Mark"}
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => removeHabit(habit.id)}
                  sx={{ borderRadius: 2 }}
                >
                  Remove
                </Button>
              </Box>
            </Box>

            {/* Streak Section */}
            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 0.5,
                  color: streak > 0 ? "success.main" : "text.secondary",
                }}
              >
                🔥 Current Streak: {streak} days
              </Typography>

              <LinearProgress
                variant="determinate"
                value={(streak / 30) * 100}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 5,
                    background: "linear-gradient(90deg, #00c853, #64dd17)",
                  },
                }}
              />
            </Box>
          </Paper>
        );
      })}

      {/* Statistics */}
      {habits.length > 0 && (
        <Paper
          sx={{
            p: 4,
            mt: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "#fff",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            📊 Habit Statistics
          </Typography>

          <Typography>Total Habits: {habits.length}</Typography>
          <Typography>Longest Streak: {getLongestStreak()} days</Typography>
          <Typography>Completed Today: {completedToday}</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default List;
