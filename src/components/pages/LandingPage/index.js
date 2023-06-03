import React from "react";
import styles from "../../../style/LandingPage.module.scss";
import lp_img_contn from "../../../assets/lp_img_contn.png";
import lp_instagram from "../../../assets/lp_instagram.png";
import lp_1 from "../../../assets/lp_1.png";
import lp_2 from "../../../assets/lp_2.png";
import lp_3 from "../../../assets/lp_3.png";
import lp_4 from "../../../assets/lp_4.png";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("success");
    navigate("/home");
  };

  return (
    <section>
      <div className={styles._container}>
        <div className={styles._inner_wrapper}>
          <div className={styles._left}>
            <div className={styles._left__container}>
              <div className={styles.prinsta_img_contn}>
                <img width={"50%"} height={"50%"} src={lp_1} alt="logo" />
              </div>
            </div>
          </div>
          <div className={styles._right}>
            <div className={styles._right__container}>
              <img src={lp_instagram} alt="logo" />
              <form onSubmit={(e) => handleSubmit(e)}>
                <input required type="text" placeholder="Email" />
                <input required type="password" placeholder="Password" />
                <button type="submit">Log in</button>
                <div>
                  <p>
                    Don't have an account?<a href="/signup"> Sign up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
