import { Box, Paper, Typography } from "@mui/material";

export const HomeScreen = () => {
  return (
    <Box>
      <Box
        sx={{
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey.900",
        }}
      >
        Hero
      </Box>
      <Box sx={{ mt: 2 }} />
      <Typography
        sx={{
          p: 2,
          color: "grey.500",
          borderBottom: `1px solid`,
          borderColor: "grey.900",
        }}
      >
        JOGOS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          borderBottom: `1px solid`,
          borderColor: "grey.900",
          "& > :not(style)": {
            my: 2,
            mx: 2,
            width: 250,
            height: 350,
          },
        }}
      >
        <Paper />
        <Paper />
        <Paper />
      </Box>
      <Typography
        sx={{
          p: 2,
          color: "grey.500",
          borderBottom: `1px solid`,
          borderColor: "grey.900",
        }}
      >
        PLATAFORMAS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            my: 2,
            mx: 2,
            width: 250,
            height: 350,
          },
        }}
      >
        <Paper />
        <Paper />
        <Paper />
      </Box>
    </Box>
  );
};
