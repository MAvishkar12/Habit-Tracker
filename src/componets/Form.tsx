import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useHabitStore from "../store/store";

const Form = () => {
  const [name, setName] = useState("");
  const [frequency, setfrequency] = useState<"daily" | "weekly">("daily");
  const { habits, addHabit } = useHabitStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addHabit(name, frequency);
      setName("");
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 3,
        background: "linear-gradient(135deg, #ffffff, #f4f6f8)",
        maxWidth: 500,
        mx: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
      >
        ➕ Add New Habit
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <TextField
            label="Habit Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Morning Workout"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />

          <FormControl fullWidth>
            <InputLabel id="Frequency">Frequency</InputLabel>
            <Select
              labelId="Frequency"
              value={frequency}
              label="Frequency"
              onChange={(e) =>
                setfrequency(e.target.value as "daily" | "weekly")
              }
              sx={{
                borderRadius: 2,
              }}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              py: 1.2,
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              boxShadow: "0 8px 20px rgba(118,75,162,0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
              },
            }}
          >
            Add Habit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Form;
