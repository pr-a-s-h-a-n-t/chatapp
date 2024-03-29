import React from "react";
import styles from "../../../style/Messages.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import note from "../../../assets/note.png";
import _picon from "../../../assets/_picon.jpg";
import SendIcon from "@mui/icons-material/Send";
import { Chat } from "@mui/icons-material";
import ChatComp from "./ChatComp";
import { Grid } from "@mui/material";

function Messages() {
  const users = [
    {
      id: 1,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 2,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 3,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 4,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 5,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 6,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 7,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 8,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 9,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 9,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 10,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 11,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 12,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
    {
      id: 13,
      name: "prashant8459",
      message: "hello",
      profile: _picon,
    },
  ];

  return (
    <Grid container className={styles.__message_wrapper}>
      <Grid item className={styles.left_col}>
        <div className={styles.head}>
          <div>
            {" "}
            <h3> prashant8459</h3> <ExpandMoreIcon />
          </div>
          <img src={note} alt="icon" />
        </div>
        <div className={styles.__messagedUsers_container}>
          {users && users.length === 0 ? (
            <div className={styles.__no_messages}>
              <h3> No Messages</h3>
            </div>
          ) : users && users.length > 0 ? (
            users.map((user) => {
              return (
                <div className={styles.__messagedUsers}>
                  <img src={_picon} alt=" profile icon" />
                  <div>
                    <h3>prashant8459</h3>
                    <p>hello</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>loading</div>
          )}
        </div>
      </Grid>
      <Grid item className={styles.right_Col}>
        {/* <div>
          <SendIcon />
          <h4>Your Messages</h4>
          <p>Send private photos and messages to a friend or group.</p>
          <button> Send Message</button>
        </div> */}
        <ChatComp />
      </Grid>
    </Grid>
  );
}

export default Messages;
