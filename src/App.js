import "./App.css";
import { contactList } from "./contact-list";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function App() {

  const [contacts,setContacts] = useState(contactList)

  const add = ()=>{ /*  Add a new contact to the contact list array  state value  */
                  setContacts( [...contacts,    {
                                                      image:
                                                        "https://raw.githubusercontent.com/ui-code-tv/images/master/dog1.jpg",
                                                      name: "New Person",
                                                      email: "new@person.com",
                                                      id: Math.floor(Math.random()*2000)
                                                    } ]  )
                  console.log('add')
                
                }



  const remove = ()=>{   /*  Remove a random contact from contacts  state value  */

                        let i= Math.floor(Math.random()*contacts.length)
                        contacts.splice(i,1)
                        setContacts([...contacts])
    
                        console.log('remove')
                      }



  const shuffle = ()=>{   
                        const shuffled = [];
                        while (contacts.length > 0) {
                          let i = (Math.random() * contacts.length) | 0;
                          shuffled.push(contacts[i]);
                          contacts.splice(i, 1);
                        }
                        setContacts([...shuffled]);   
                          
                        console.log('shuffle')
                      }

  return (
    <div className="App">
      <h1>CONTACT LIST </h1>
      <div>
        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
        <button onClick={shuffle}>shuffle</button>
      </div>
      <ul className="wrapper">
        <AnimatePresence>
          {
            contacts.map((item) => (
                  <motion.li className="card"
                      key={item.id}
                      initial={{ scale:0}}
                      animate={{ 
                                  scale:1,
                                  transition:{delay:0.5,type:"spring"}
                                }}
                      exit={{ 
                        opacity:0,
                        transition:{delay:0.5}
                      }}      

                      layout          
                  
                  >
                    <div className="content">
                      <img src={item.image} />
                      <div class="details">
                        <span className="name">Name: {item.name}</span>
                        <span className="email">Email: {item.email}</span>
                      </div>
                    </div>
                  </motion.li>
            ))
          }
        </AnimatePresence>
      </ul>
    </div>
  );
}