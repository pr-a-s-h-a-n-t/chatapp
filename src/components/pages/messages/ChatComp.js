import React from "react";
import styles from "../../../style/Messages.module.scss";
import note from "../../../assets/note.png";
// import _photo from "../../../assets/post.svg";
import _picon from "../../../assets/_picon.jpg";

import { BiVideo } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
function ChatComp() {
  return (
    <div className={styles.__chat_container}>
      <div className={styles.__chat_header}>
        <div className={styles.__chat_header_left}>
          <img src={_picon} alt="profile icon" />
          <h3>prashant8459</h3>
        </div>
        <div className={styles.__chat_header_right}>
          <BiVideo />
          <BsTelephone />
          <AiOutlineExclamationCircle />
        </div>
      </div>
      <div className={styles.__chat_body}>
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
      </div>
      <div className={styles.__chat_footer}>
        <div className={styles.__chat_footer_left}>
          <img src={note} alt="icon" />
          <img src={note} alt="icon" />
          <img src={note} alt="icon" />
        </div>
        <div className={styles.__chat_footer_right}>
          <input type="text" placeholder="message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatComp;
