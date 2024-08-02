import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

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
        <Typography variant="h5">{number}</Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Box>
  );
}
