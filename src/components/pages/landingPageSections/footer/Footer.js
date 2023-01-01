import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <Toolbar
        sx={{
          border: "1px solid green",
          position: "absolute",
          bottom: "0",
          width: " 100%",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <Typography>this is footer.</Typography>
      </Toolbar>
    </div>
  );
}

export default Footer;
