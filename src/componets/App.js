import React, {useState,useEffect } from 'react';
//import './App.css';
import ListOfItems from './list';
import DatePickers from './dateObject'
import styles from  '../styling/styles.module.css' 
import ContinuousSlider from "./sliders"
import axios from 'axios';



//setItems={setItems}
 function  App(props) {
  //  var GetTheJson= async () => {
  //  var datajson 
  //  const response = await fetch("/soldier_file.json").then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   datajson=data;
  // });
  // // var datajson=await response.json()
  //   console.log(datajson, "חרא חרא חרא")
  //   return datajson;
  // }
  // var data=GetTheJson()
  // console.log("שיט")
  // var soldiers = useState(data.soldiers);
  // var Commanders = useState(data.Commanders);
  // var soldierInLine=useState(data.soldierInLine);
  // var commanderInLine=useState(data.commanderInLine);
  // var numberOfBlocks=useState(data.numberOfBlocks);
  // var maxBorderSize=useState(data.maxBorderSize);
  // var max_range=useState(data.max_range);
  // var weekendDays=useState(data.weekendDays);
  // var date=useState(data.date);
  // var nameS="חיילים"
  // var nameC="מפקדים"
  

  const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(async () => {
      const response = await fetch(url);
      const data = await response.json();
      const item = data;
      soldiers[1](data.soldiers);
      Commanders[1](data.Commanders) 
      soldierInLine[1](data.soldierInLine) 
      commanderInLine[1](data.commanderInLine) 
      numberOfBlocks[1](data.numberOfBlocks) 
       maxBorderSize[1](data.maxBorderSize)  
       max_range[1](data.max_range) 
      weekendDays[1](data.weekendDays)  
       date[1](data.date) 
       setLoading(false);
    }, []);
  
    return { data, loading };
  };

  // soldiers[1](data.soldiers);
  // Commanders[1](data.Commanders) 
  // soldierInLine[1](data.soldierInLine) 
  // commanderInLine[1](data.commanderInLine) 
  // numberOfBlocks[1](data.numberOfBlocks) 
  // maxBorderSize[1](data.maxBorderSize)  
  // max_range[1](data.max_range) 
  // weekendDays[1](data.weekendDays)  
  // date[1](data.date) 
    

 //var itemsj=["קובי", "אלון", "אליהו", "רן", "גיא","רועי", "אמיר כ", "אמיר י", "טל", "יששכר", "שקד", "עומר", "אשל","קובי", "אלון", "אליהו", "רן", "גיא","רועי", "אמיר כ", "אמיר י", "טל", "יששכר", "שקד", "עומר", "אשל" ]
 //var itemC=["רן", "גיא","רועי", "אמיר כ", "אמיר י", "טל", "יששכר",]

 var DateTime="2020-04-15"
 var nameS="חיילים"
 var nameC="מפקדים"
 var date=useState(DateTime) 
 var soldiers = useState([]);
 var Commanders=useState([])
 var soldierInLine=useState(0)
 var commanderInLine=useState(0)
 var max_range=useState(0)
 var numberOfBlocks=useState(0)
 var maxBorderSize=useState(0)
 var weekendDays=useState(0)

 const { data, loading } = useFetch("/soldier_file.json");


 return (
    <React.StrictMode>
    <ListOfItems Items={soldiers} name={nameS} className={styles.nameListSoldeirs} itemChosen={soldierInLine} />
    <ListOfItems Items={Commanders} name={nameC} className={styles.nameListCommenders} itemChosen={commanderInLine} /> 
    <ContinuousSlider className={styles.sliderNunberOfLines} value={max_range} min={7} max={70} step={7} nameOfTheSLider={"מספר השורות"}/>
    <ContinuousSlider className={styles.sliderNunberOfBlocks} value={numberOfBlocks} min={1} max={4} step={1} nameOfTheSLider={"מספר הבלוקים"}/>
    <ContinuousSlider className={styles.sliderNunberOfBorder} value={maxBorderSize} min={1} max={4} step={1} nameOfTheSLider={"מספר הגבול"}/>
     <ContinuousSlider className={styles.sliderWeakendDays} value={weekendDays} min={0} max={6} step={1} nameOfTheSLider={"מספר ימי סוף השבוע"}/>
    <DatePickers className={styles.dateObject}  DateTime={date}/>
    </React.StrictMode>
  );
 
}

 

export default App;
