import React, { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//  import setDoc , getDoc, db from firebase
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig/index";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import { auth } from "../../firebaseConfig/index";
import { userContext } from "../../contex/userContex";

function Auth() {
  const navigateUser = useNavigate();
  const [state, dispatch] = useContext(userContext);

  const signIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // localStorage.setItem("user", JSON.stringify(user));
        const { displayName, email, photoURL } = user;
        dispatch({
          type: "LOGIN",
          payload: {
            displayName,
            email,
            photoURL,
          },
        });
        navigateUser("/chats");
        console.log("auth result ", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Button
      onClick={signIn}
      variant="contained"
      className="google-button"
      sx={{
        width: "30%",
        height: "100%",
        backgroundColor: "aquaLightGray",
        color: "purple",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GoogleIcon className="google-logo" />
    </Button>
  );
}

export default Auth;
