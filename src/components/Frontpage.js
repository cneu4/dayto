import { auth } from "../firebase-config";
import { getAuth } from "firebase/auth";
import  logout  from "./Login"


function Frontpage() {
    
    const auth = getAuth();
    const user = auth.currentUser;
    
    
    return (
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
}

export default Frontpage;
