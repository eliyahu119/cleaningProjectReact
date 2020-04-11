import React, {useState} from 'react';
//import './App.css';
import ListOfItems from './list';
import DateObject from './dateObject'
import styles from  '../styling/styles.module.css' 
import halfstyles from  '../styling/half.module.css' 
import Slider from '@material-ui/core/Button';
import ContinuousSlider from "./demo"



//setItems={setItems}

function App() {
 var itemsj=["קובי", "אלון", "אליהו", "רן", "גיא","רועי", "אמיר כ", "אמיר י", "טל", "יששכר", "שקד", "עומר", "אשל","קובי", "אלון", "אליהו", "רן", "גיא","רועי", "אמיר כ", "אמיר י", "טל", "יששכר", "שקד", "עומר", "אשל" ]
 var name="אליהו"
 var [items, setItems] = useState(itemsj);
 var itemChosen=useState(0)
 return (
    <React.StrictMode>
    <div className={halfstyles.half}>
    <ListOfItems items={items} name={name} setItems={setItems} className={styles.nameList} itemChosen={itemChosen} />
    </div>
    {/* <DateObject /> */}
    {/* <ContinuousSlider /> */}
    </React.StrictMode>
  );
}
export default App;
