import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import GridOnIcon from "@mui/icons-material/GridOn";
import tagged from "../../../assets/contact.png";
import { AppBar } from "@mui/material";
import Menu from "@mui/material/Menu";

export default function App() {
  const [tabvalue, setTabValue] = React.useState(0);

  const handleTabsChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setTabValue(newValue);
  };

  return (
    <div className="App">
      <Tabs
        onChange={handleTabsChange}
        value={tabvalue}
        indicatorColor="secondary"
        textColor="secondary"
        sx={{
          "& .MuiTabs-flexContainer": {
            display: "flex",
            justifyContent: "center",
          },
          "& .MuiTab-root": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            columnGap: {
              sx: "6px",
              sm: "10px",
              md: "1rem",
            },
          },
          "& .MuiTab-iconWrapper": {
            width: {
              sm: "12px",
              md: "20px",
            },
          },
        }}
      >
        <Tab icon={<GridOnIcon />} label="Posts" />
        <Tab icon=<BookmarkBorderIcon /> label="Saved" />
        <Tab icon={<AssignmentIndIcon />} label="tagged" />
      </Tabs>

      {tabvalue === 0 && <Menu />}
      {/* {tabvalue === 1 && <Menu2 />} */}
    </div>
  );
}
