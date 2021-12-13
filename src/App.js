import "./App.css";
import Frontpage from "./components/Frontpage";
import Login from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";


function App() {
  const [user] = useState({});
  const auth = getAuth();
  //const user = auth.currentUser;
    if (user) {
      return <Frontpage/> 
    } else {
      return  <Login/> 
    }
  };
  
 

    
    
  



export default App;