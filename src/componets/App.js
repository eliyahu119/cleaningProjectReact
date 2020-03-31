import React, {useState,useRef} from 'react';
//import './App.css';
import ListOfItems from './list';
import styled from 'styled-components'
import styles from  '../styling/styles.module.css' 
import NameForm from './textComponet'

var DivI = styled.div`
  
`;


//setItems={setItems}

function App() {
 var itemsj=["קובי", "אלון", "אליהו", "רן", "גיא","רועי", "אמיר כ", "אמיר י", "טל", "יששכר", "שקד", "עומר", "אשל","קובי", "אלון", "אליהו", "רן", "גיא","רועי", "אמיר כ", "אמיר י", "טל", "יששכר", "שקד", "עומר", "אשל" ]
 var name="אליהו"
 var [items, setItems] = useState(itemsj);
 return (
    <React.StrictMode>
    {/* <h1>{items.join(" ")}</h1> */}
    {/* <DivI> */}
    {/* <ListOfItems items={items} name={name} setItems={setItems} className={styles.nameList}/> */}
    {/* </DivI> */}
    <NameForm items={items} setItems={setItems} />
    </React.StrictMode>
  );
}
export default App;
