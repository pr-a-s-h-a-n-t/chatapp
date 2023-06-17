import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import Divider from "@mui/material/Divider";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function Search() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        padding: "1rem 0.5rem",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <TextField
        sx={{
          width: "100%",

          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent !important",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent !important",
            },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "transparent !important",
          },
          "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
            borderRadius: "1rem",
            border: "2px solid grey",
            width: "100%",
            height: "2.2rem",
            padding: "0 1rem",
            outline: "none",
            fontSize: "1rem",
            fontWeight: 400,
            color: "#262626",
            "&::placeholder": {
              fontSize: "1rem",
              fontWeight: 400,
              color: "#8e8e8e",
            },
            "&:hover": {},
          },
          ".css-15dhbxf-MuiButtonBase-root-MuiIconButton-root": {
            fontSize: "0.8rem",
            fontWeight: 600,
            width: "67px",
            background: "#fceeff",
            borderRadius: "35px",
            height: "25px",
            color: "chocolate",
          },
        }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary">
                Search
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>{"left"}</Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          //   onClose={toggleDrawer("left", false)}
          //   onOpen={toggleDrawer("left", true)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
