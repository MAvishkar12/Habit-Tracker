import React from "react";
import useHabitStore from "./store/store";
import { Container, Typography, Box } from "@mui/material";
import Form from "./componets/Form";
import List from "./componets/List";

const App = () => {
  const { habits } = useHabitStore();
  console.log(habits);

  return (
    <Container
     maxWidth={"xl"}
      sx={{
        minHeight: "100vh",
   
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      
        py: 4,
      }}
    >
      <Box>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          Habit Tracker
        </Typography>

        <Form />
        <List />
      </Box>
    </Container>
  );
};

export default App;