import { useState, useEffect, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css"
import { auth, db } from "./firebase-config";
import { collection, query, onSnapshot, limit, orderBy} from "firebase/firestore";
import Chat from "./Chat"
import {
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Frontpage from "./Frontpage";







export default function App() {
  
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  }
  const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(50));
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        const messages = QuerySnapshot.docs;
        })
      });
      
    
  
  

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });




  const register = () => {
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      window.alert("Das Passwort muss mindestens 6 Zeichen lang sein")
    }
  };

  const login = () => {
    try {
      const user = signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      window.alert("Dieser User existiert nicht")
    }
  };
  
  const logout = () => {
    signOut(auth);
  };
  

  
  
 
  //wenn user eingeloggt ist
  if (user) {                   
  return (                                                                      //FRONTPAGE bzw hauptseite mit menübuttons
      <div className="App">
        <h1 className="headerD" align="center">DayToPat</h1> 
          <div>
              <BrowserRouter>
              <li>
                <button className="layoutBF">
                    <Link to="/">Frontpage</Link>
                </button>
              </li>
              <li>
            <button className="layoutBC">
                <Link to="/chat">Chat</Link>
            </button>
          </li>
          <li>
            <button className="layoutBP">
                <Link to="/profile">Profile</Link>
            </button>
          </li>
                <Routes>
                  <Route path="/" element={<Frontpage/>} />
                  <Route path="chat" element={<Chat/>} />    
                </Routes>
              </BrowserRouter>
              <h4 className="userMail" style={{"color": "white"}}> Eingeloggt: {user?.email}</h4>
            </div>  
      </div>    
      

  );  
} 

  else {
      return (                                                                    //LOGINPAGE
      <div className="App">
        <div>
          <img src="DayToPat_Logo.png"alt="" width="300" height="300"/>
          <h3 style={{"color": "white"}}>  Registriere dich </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Passwort..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={register}> Registrieren</button>
          <label style={{"color": "white"}}>
            <input type="checkbox"
            checked={checked}
            onChange={handleChange} />
            Institution?
          </label>
          <p style={{"color": "white"}}>Tierheim: {checked.toString()}</p>
        </div>

        <div>
          <h3 style={{"color": "white"}}> Login </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Passwort..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button onClick={login}> Login</button>
        </div>

        <h4 style={{"color": "white"}}> Eingeloggt: {user?.email}</h4>
        

        <button onClick={logout}> Abmelden </button>
      </div>
    );
  }
  }



  
 

    
