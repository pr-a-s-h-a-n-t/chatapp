import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GoogleLogo from "../../../../assets/googleLogo.jpg";
import Auth from "../../../auth";

function Hero() {
  return (
    <Grid
      container
      sx={{
        boxSizing: "border-box",
        fontSize: "clamp(12px , 2rem , 6rem )",
        margin: "auto",
        maxWidth: "90%",
        color: "purple",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid item sm={12} md={6}>
        <div>
          <motion.h1
            className="big-heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <span
              style={{
                textShadow: "3px 2px 2px orange",
              }}
            >
              Welcome User
            </span>

            <br />
            <span
              style={{
                textShadow: "3px 2px 2px orange",
              }}
            >
              Sign In{" "}
            </span>
          </motion.h1>
        </div>
      </Grid>
      <Auth />
    </Grid>
  );
}

export default Hero;
