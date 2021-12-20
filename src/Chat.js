import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from './firebase-config'
import SendMessage from './SendMessage'
import { collection, query,  onSnapshot, limit, orderBy} from "firebase/firestore";
import SignOut from './SignOut';


function Chat() {
const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(50));
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        const messages = QuerySnapshot.docs;
        })
      });

      
      return(
        <div>
              { <SignOut /> } 
              <div className="msgs">
                {messages.map(({id, text, photoURL, uid}) => (
                      <div>
                          <div key={text} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                              <img src={photoURL} alt="" />
                              <p>{text}</p>
                          </div>
                      </div>
                  ))}
              </div>
              <SendMessage scroll={scroll} />
              <div ref={scroll}></div>
          </div>
      )   
    }    

export default Chat;                              