import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

// Custom styled Avatar component which takes in a Visibility Boolean and adjusts the Avatars blur
const StyledAvatar = styled(Avatar)(({ visible }) => ({
  filter: visible ? "none" : "blur(4px)",
  transition: "filter 0.7s ease-in-out",
}));

// Custom styled component to hide and provide generic length text
const HiddenContent = styled("div")(({ theme }) => ({
  filter: "blur(5px)",
  transition: "filter 0.7s ease-in-out, color 0.7s ease-in-out",
  color: theme.palette.text.disabled,
}));

const StyledText = styled("span")(({ visible }) => ({
  transition: "opacity 0.7s ease-in-out",
  opacity: visible ? 1 : 0,
  position: "absolute",
  width: "100%",
  textAlign: "left",
  cursor: "default",
}));

const ResultListItem = ({ country, visible, onToggle }) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <StyledAvatar
            src={visible ? country.flags.svg : "?"}
            visible={visible}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box
              position="relative"
              width="100%"
              display="flex"
              alignItems="center"
            >
              <StyledText visible={!visible}>
                <HiddenContent>Generic Length Text</HiddenContent>
              </StyledText>
              <StyledText visible={visible}>{country.name.common}</StyledText>
            </Box>
          }
        />
        <IconButton onClick={onToggle}>
          {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default ResultListItem;
