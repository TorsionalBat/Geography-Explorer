import React from "react";
import { Box, Typography, Avatar, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled component of Avatar which receives a Boolean 'visible' and applies a filter to the Avatar based on the value
const StyledAvatar = styled(Avatar)(({ visible }) => ({
  filter: visible ? "none" : "blur(4px)",
  transition: "filter 0.7s ease-in-out",
}));

// Custom styling of ButtonBase component - provides button/clickable/ripple action to the Avatar/StyledAvatar
const CustomButtonBase = styled(ButtonBase)(() => ({
  borderRadius: "50%",
}));

export default function StatisticCard({ number, description, visible }) {
  const [isVisible, setIsVisible] = React.useState(visible); // State to handle visibility

  // Toggle visibility onClick
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
