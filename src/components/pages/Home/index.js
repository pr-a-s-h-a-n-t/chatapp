import React from "react";
import styles from "../../../style/Home.module.scss";
import profileIcons from "../../../assets/_picon.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "./modal";
import post from "../../../assets/post.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import message from "../../../assets/micon.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Status from "./Status/Status";

function Home() {
  const userPost = [
    {
      id: 1,
      name: "Prashant8459",
      profile: profileIcons,
      post: post,
      likes: 1069,
      comments: [
        {
          id: 1,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
        {
          id: 2,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
      ],
    },
    {
      id: 1,
      name: "Prashant8459",
      profile: profileIcons,
      post: post,
      likes: 1069,
      comments: [
        {
          id: 1,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
        {
          id: 2,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
      ],
    },
    {
      id: 1,
      name: "Prashant8459",
      profile: profileIcons,
      post: post,
      likes: 1069,
      comments: [
        {
          id: 1,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
        {
          id: 2,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
      ],
    },
    {
      id: 1,
      name: "Prashant8459",
      profile: profileIcons,
      post: post,
      likes: 1069,
      comments: [
        {
          id: 1,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
        {
          id: 2,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
      ],
    },
    {
      id: 1,
      name: "Prashant8459",
      profile: profileIcons,
      post: post,
      likes: 1069,
      comments: [
        {
          id: 1,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
        {
          id: 2,
          name: "Prashant8459",
          comment:
            "Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque",
        },
      ],
    },
  ];
  return (
    <>
      <div className={styles._wrapper}>
        <div className={styles._content}>
          <div>
            <Status />
          </div>
          {userPost && userPost.length === 0 ? (
            <div className={styles._noPost}>
              <h1>No Post Found</h1>
            </div>
          ) : userPost && userPost.length > 0 ? (
            userPost.map((item, index) => {
              return (
                <div key={item.id} className={styles._post}>
                  <div className={styles._postHead}>
                    <div>
                      {" "}
                      <img
                        src={item.profile}
                        width={"100%"}
                        height={"100%"}
                        key="image1"
                        alt="profile icon"
                      />
                      <h4>{item.name}</h4>
                    </div>
                    <Modal />
                  </div>
                  <div className={styles._postContent}>
                    <img src={post} alt="post" />
                  </div>
                  <div className={styles._postStats}>
                    <div className={styles.icon}>
                      <span>
                        <FavoriteIcon />
                        <SendIcon />
                        <img src={message} alt="icon" />
                      </span>
                      <BookmarkBorderIcon />
                    </div>
                    <div className={styles._comment}>
                      <h6>1,069 Likes</h6>
                      <span>
                        <h6>{item.name}</h6>
                        <p>{item.comments[0].comment}</p>
                      </span>
                      <h6>View all 10 comments</h6>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles._noPost}>
              <h1>loading</h1>
            </div>
          )}
        </div>
        <div className={styles._right_col}>this is right section</div>
      </div>
    </>
  );
}

export default Home;
