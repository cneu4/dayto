import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
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




  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
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

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
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

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
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
        <p>Is "My Value" checked? {checked.toString()}</p>
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

export default App;
