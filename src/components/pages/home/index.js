import React from "react";
import styles from "../../../style/HomeMain.module.scss";
import Profileicon from "../../../assets/_picon.jpg";
import SettingsICon from "../../../assets/settings.png";

function Home() {
  return (
    <div className={styles._profile_wrapper}>
      <div className={styles._profileHead}>
        <div className={styles.profileContainer}>
          <img
            src={Profileicon}
            width={"100%"}
            height={"100%"}
            alt="profile picture"
          />
        </div>
        <div className={styles.user_info}>
          <div className={styles._id}>
            <h2>prashant8459</h2>
            <button> Edit Profile</button>
            <button className={styles._modalbtn}>
              <img src={SettingsICon} alt="settings icon" />
            </button>
          </div>
          <div className={styles._profileStats}>
            <h3>posts</h3>
            <h3>followers</h3>
            <h3>following</h3>
          </div>
          <div className={styles._nameNDBio}>
            <h4>Prashant Mishra</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
