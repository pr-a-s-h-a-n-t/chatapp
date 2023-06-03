import React from "react";
import styles from "../../../style/Messages.module.scss";
import note from "../../../assets/note.png";
// import _photo from "../../../assets/post.svg";
import _picon from "../../../assets/_picon.jpg";

import { BiVideo } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

function ChatComp() {
  return (
    <div className={styles.__chat_container}>
      <div className={styles.__chat_header}>
        <div className={styles.__chat_header_left}>
          <img src={_picon} alt="profile icon" />
          <h3>prashant8459</h3>
        </div>
        <div className={styles.__chat_header_right}>
          <BsTelephone />
          <BiVideo />
          <AiOutlineExclamationCircle />
        </div>
      </div>
      {/* <div className={styles.__chat_body}>
        <div className={styles.__chat_body_left}>
          <div className={styles.__chat_body_left_message}>
            <img src={_picon} alt="profile icon" />
            <p>hello</p>
          </div>
        </div>
        <div className={styles.__chat_body_right}>
          <div className={styles.__chat_body_right_message}>
            <img src={_picon} alt="profile icon" />
            <p>hello</p>
          </div>
        </div>
      </div> */}
      <div className={styles.__chat_footer}>
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
            "& .css-15dhbxf-MuiButtonBase-root-MuiIconButton-root": {
              fontSize: "0.8rem",
              fontWeight: 400,
              color: "secondary",
            },
          }}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary">
                  {/* <FavoriteBorderIcon /> */}
                  Send
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default ChatComp;
