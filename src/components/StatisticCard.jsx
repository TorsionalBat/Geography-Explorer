import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

export default function StatisticCard({ number, description }) {
  return (
    <Box display="flex" flexDirection="row">
      <Box
        display="flex"
        flexDirection="row"
        gap={2}
        padding={1}
        alignItems="center"
      >
        <Avatar sx={{ padding: "5px" }}>{number}</Avatar>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Box>
  );
}
