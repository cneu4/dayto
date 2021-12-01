import "./App.css";
import Login from "./components/Login";
import {auth} from "./firebase-config";
//import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  //const [user] = useAuthState(auth)
  return (
    <Login/>
  );
}


export default App;