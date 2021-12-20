import logout from "./App";
import { auth } from "./firebase-config";
import SignOut from "./SignOut";

export default function Frontpage () {

    return (                                                                      //FRONTPAGE
        <div className="FrP">
            <div>
            { <SignOut /> } 
                <div>
                    <img src="d.png" alt="ja" />
                    <button className="buttonL">
                        Like
                    </button>
                    <button className="buttonD">
                        Dislike
                    </button>
                </div>
            </div>
        </div>
    )}