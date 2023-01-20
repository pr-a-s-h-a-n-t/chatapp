import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ChatsPage() {
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
    },
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid sx={style.container} item md={0.5} lg={1.5}>
          <Item
            sx={{
              margin: "20px 4px",
            }}
          >
            xs=6 md=8
          </Item>
          <Item
            sx={{
              margin: "20px 4px",
            }}
          >
            xs=6 md=8
          </Item>
          <Item
            sx={{
              margin: "20px 4px",
            }}
          >
            xs=6 md=8
          </Item>
          <Item
            sx={{
              margin: "20px 4px",
            }}
          >
            xs=6 md=8
          </Item>
          <Item
            sx={{
              margin: "20px 4px",
            }}
          >
            xs=6 md=8
          </Item>
          <Item
            sx={{
              margin: "20px 4px",
            }}
          >
            xs=6 md=8
          </Item>
        </Grid>
        <Grid sx={style.container} item md={4} lg={4}>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
          <Item
            sx={{
              margin: "4px 3px",
            }}
          >
            contact
          </Item>
        </Grid>
        <Grid sx={style.container} item md={4} lg={6}>
          <Item>messageAre</Item>

          <div
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: "8%",
              border: "1px solid red",
              padding: "4px",
              position: "sticky",
              bottom: "0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              placeHolder="enter message.."
              style={{
                width: "80%",
                height: "90%",
                borderRadius: "0.5rem",
                padding: " 0 5px",
              }}
            />
            <button
              style={{
                marginLeft: "4px",
                borderRadius: "0.5rem",
              }}
            >
              send
            </button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
