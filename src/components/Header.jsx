import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";

export default function ButtonAppBar({ handleHeaderClick }) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static" sx={{ padding: 2, alignItems: "center" }}>
        <Toolbar>
          <IconButton onClick={handleHeaderClick}>
            <Avatar src="./globe.svg" />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Country Explorer
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
