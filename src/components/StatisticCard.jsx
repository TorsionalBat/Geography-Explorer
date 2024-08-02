import React from "react";
import { Box, Typography, Avatar, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAvatar = styled(Avatar)(({ visible }) => ({
  filter: visible ? "none" : "blur(4px)",
  transition: "filter 0.7s ease-in-out",
}));

const CustomButtonBase = styled(ButtonBase)(({ theme }) => ({
  borderRadius: "50%",
  overflow: "hidden",
  "& .MuiTouchRipple-root": {
    borderRadius: "50%",
  },
  "& .MuiTouchRipple-rippleVisible": {
    color: "grey",
  },
}));

export default function StatisticCard({ number, description, visible }) {
  const [isVisible, setIsVisible] = React.useState(visible);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Box display="flex" flexDirection="row">
      <Box
        display="flex"
        flexDirection="row"
        gap={2}
        padding={1}
        alignItems="center"
      >
        <CustomButtonBase
          onClick={handleToggle}
          sx={{ minWidth: 0, padding: 0 }}
        >
          <StyledAvatar visible={isVisible} sx={{ padding: "5px" }}>
            {number}
          </StyledAvatar>
        </CustomButtonBase>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Box>
  );
}
