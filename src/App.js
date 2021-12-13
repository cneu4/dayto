import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css"
import { auth } from "./firebase-config";






function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };


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
  
  
  
  if (user) {                                                                                        
    return (                                                                      //FRONTPAGE
      <div className="App">
          <div>
              <button onClick={logout}className="buttonLO">
                  Ausloggen
                  </button>
              <div>
                  <img src="d.png" />
                  <button className="buttonL">
                      Like
                  </button>
                  <button className="buttonD">
                      Dislike
                  </button>
              </div>
              <h4 style={{"color": "white"}}> Eingeloggt: {user?.email}</h4>
          </div>    
      </div>

  );
      
    
  } else {
      return (                                                                    //LOGINPAGE
      <div className="App">
        <div>
          <img src="DayToPat_Logo.png" width="300" height="300"/>
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



  
 

    
  export default App;