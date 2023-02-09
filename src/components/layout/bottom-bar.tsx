import { Box, Stack, Typography } from "@mui/material";

export const BottomBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        backgroundColor: "grey.900",
        borderTop: `1px solid`,
        borderColor: "grey.800",
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" noWrap>
            Leaguefy
          </Typography>
          <Typography fontSize="small">© 2023</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, mt: 1 }} />
        <Box>
          <Typography fontSize="small">contact@leaguefy.club</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
