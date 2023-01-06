import { useEffect, useState } from "react";
import AppRouter from "./Router";
import { onAuthStateChanged } from "firebase/auth";
import { authService } from "../firebase";
import "./App.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  //user login true & false
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <AppRouter userObj={userObj} isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
