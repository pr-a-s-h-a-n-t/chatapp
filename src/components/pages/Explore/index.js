import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
// src\assets\Smal-Post.png
import post1 from "../../../assets/Smal-Post.png";
import post2 from "../../../assets/Big-Post.png";
import post3 from "../../../assets/Small-Post2.png";
import pos4 from "../../../assets/Smal-Post3.png";
import post5 from "../../../assets/Smal-Post-4.png";
import post6 from "../../../assets/Small-Post-5.png";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];
// make dummy data for insta explore page in masonry layout using react-masonry-css and add height to each + 100 item
const dummyPosts = [
  {
    id: 1,
    post: post1,
    title: "Image",
    height: 150 + 122,
  },
  {
    id: 2,
    post: post2,
    title: "Image",
    height: 30 + 122,
  },
  {
    id: 3,
    post: post3,
    title: "Image",
    height: 90 + 122,
  },
  {
    id: 4,
    post: pos4,
    title: "Image",
    height: 70 + 122,
  },
  {
    id: 5,
    post: post5,
    title: "Image",
    height: 110 + 122,
  },
  {
    id: 6,
    post: post6,
    title: "Image",
    height: 150 + 122,
  },
  {
    id: 7,
    post: post1,
    title: "Image",
    height: 130 + 122,
  },
  {
    id: 8,
    post: post3,
    title: "Image",
    height: 80 + 122,
  },
  {
    id: 9,
    post: post1,
    title: "Image",
    height: 150 + 122,
  },
  {
    id: 10,
    post: post2,
    title: "Image",
    height: 30 + 122,
  },
  {
    id: 11,
    post: post3,
    title: "Image",
    height: 90 + 122,
  },
  {
    id: 12,
    post: pos4,
    title: "Image",
    height: 70 + 122,
  },
  {
    id: 13,
    post: post5,
    title: "Image",
    height: 110 + 122,
  },
  {
    id: 14,
    post: post6,
    title: "Image",
    height: 150 + 122,
  },
  {
    id: 15,
    post: post1,
    title: "Image",
    height: 130 + 122,
  },
  {
    id: 16,
    post: post3,
    title: "Image",
    height: 80 + 122,
  },
  {
    id: 17,
    post: post1,
    title: "Image",
    height: 150 + 122,
  },
  {
    id: 18,
    post: post2,
    title: "Image",
    height: 30 + 122,
  },
  {
    id: 19,
    post: post3,
    title: "Image",
    height: 90 + 122,
  },
  {
    id: 20,
    post: pos4,
    title: "Image",
    height: 70 + 122,
  },
  {
    id: 21,
    post: post5,
    title: "Image",
    height: 110 + 122,
  },
  {
    id: 22,
    post: post6,
    title: "Image",
    height: 150 + 122,
  },
  {
    id: 23,
    post: post1,
    title: "Image",
    height: 130 + 122,
  },
  {
    id: 24,
    post: post3,
    title: "Image",
    height: 80 + 122,
  },
  {
    id: 25,
    post: post1,
    title: "Image",
    height: 150 + 122,
  },
  {
    id: 26,
    post: post2,
    title: "Image",
    height: 30 + 122,
  },
  {
    id: 27,
    post: post3,
    title: "Image",
    height: 90 + 122,
  },
  {
    id: 28,
    post: pos4,
    title: "Image",
    height: 70 + 122,
  },
  {
    id: 29,
    post: post5,
    title: "Image",
    height: 110 + 122,
  },
  {
    id: 30,
    post: post6,
    title: "Image",
    height: 150 + 122,
  },
  {
    id: 31,
    post: post1,
    title: "Image",
    height: 130 + 122,
  },
  {
    id: 32,
    post: post3,
    title: "Image",
    height: 80 + 122,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry() {
  return (
    <Box sx={{ width: "100%", minHeight: 393 }}>
      <Masonry columns={6} spacing={2}>
        {dummyPosts.map((post, index) => (
          <Item key={index} sx={{ height: post.height }}>
            <img width="100%" height="100%" src={post.post} alt="users post" />
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
