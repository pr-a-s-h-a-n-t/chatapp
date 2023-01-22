import { Grid } from "@mui/material";
import React, { useState } from "react";
import Contacts from "./contacts/index";
import chatArea from "./chatArea/index";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TestNav from "./testNav/index"

import { darkContext, DarkProvider } from "../../../contex/darkModeContex";

function ConversationsPageTest() {
  const [state, dispatch] = React.useContext(darkContext);

  const [mobileSectionState, setMobileSectionState] = useState("sidebar");
  const [selectedJob, setSelectedJob] = useState(null);


  const style = {
    container: {
      height: "70vh",
      border: "2px solid red",
      // margin: "0 2px"
    },
    innerItem: {
      height: "100%",
      padding: "1rem",
      margin: "0 2px",
    },}
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));

  return (
    <Grid
      container
      // sx={{
      //   color: state.shades.secondary,
      //     backgroundColor: state.shades.primary,
      // }}
    >
      <Grid   md={0.65}   
      sx={{
        border: "1px solid gold",
      }}
        item  >
       <TestNav />
      </Grid>
      <Grid
        sx={{
          // display: {
          //   xs: mobileSectionState === "sidebar" ? "block" : "none",
          //   md: "block",
          // },

          // marginTop: "2rem",
          
          border: "2px solid green",
          boxSizing: "border-box",
          overflowWrap: "break-word",
        }}
        item
        xs={5}
        md={8}
      >
        <Contacts
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          setMobileSectionState={setMobileSectionState}
        />
      </Grid>
      <Grid
        item
        // xs={12}
        // md={8}
        sx={{
          display: {
            xs: mobileSectionState === "jobform" ? "block" : "none",
            md: "block",
          },

          marginTop: "2rem",
          height: "70vh",
          overflowY: "auto",
          overflowX: "hidden",
          border: "3px solid black",
          boxSizing: "border-box",
          overflowWrap: "break-word",
        }}
      >
        <h1>Chat Area section</h1>
        <chatArea
          selectedJob={selectedJob}
          setMobileSectionState={setMobileSectionState}
        />
      </Grid>
    </Grid>
  );
}

export default ConversationsPageTest;
