import styled from 'styled-components'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import React from 'react';
import RemBt from './removalButton'
import Sign from "./signButton"
import AddItemsprop from './textComponet'
 

const Item = styled.li`
  display: block;
  border-top: 1px solid #888;
  list-style-type: none;
  padding: 4px 0;
  &:hover {
      background: #EEE;
  }  
`;

const List = styled.ul`
    margin: auto;
    padding-left: 0;
`;

const Header = styled.li`
    padding: 5px;
    color: #888;
    font-weight: bold;
    list-style-type: none;
`;

const AddItems = styled.li`
    padding: 5px;
    color: #888;
    font-weight: bold;
    list-style-type: none;
    border-top: 1px solid #888;

`;


const SortableItem = SortableElement(Item);
    const SortableList = SortableContainer(props => {  
    var [itemChossen,setItemChossen]=props.itemChosen
 //  console.log(props.itemChosen, "hello")
   return (
  <div>
       <List>  
       <Header>{props.name}</Header>
           {       
                    props.items.map((item, index) =>{
                     var backgroundColor=itemChossen==index?"#afe6da":"";
                      return(
                      <SortableItem  ey={`item-${index}`}  index={index} key={index} style={{backgroundColor:backgroundColor}}>
                      {item}
                      <RemBt items={props.items} setItems={props.setItems} index={index} />
                      <Sign setItemChossen={setItemChossen}  index={index} />
                     </SortableItem>
                     )
                  }
               )           
           }
        <AddItems><AddItemsprop items={props.items} setItems={props.setItems} /></AddItems>
       </List>
   </div>
   );
});

 function ListOfitems(props){
     var sortTheElements=({oldIndex,newIndex})=>{
        const removed=props.items.slice(0,oldIndex)
        .concat(props.items.slice(oldIndex+1));
             props.setItems(
             removed.slice(0,newIndex)
             .concat([props.items[oldIndex]])
             .concat(removed.slice(newIndex)))
             var [itemChossen,setItemChossen]=props.itemChosen
             if(itemChossen==oldIndex)
             {
             setItemChossen(newIndex)
             } else 
             if((itemChossen>oldIndex)&&itemChossen<=newIndex)  {  
             setItemChossen(itemChossen-1)
             }
              else
            if((itemChossen<oldIndex)&&itemChossen>=newIndex)
             setItemChossen(itemChossen+1)
           console.log(oldIndex,newIndex,itemChossen)
    }
    return <SortableList items={props.items} name={props.name} setItems={props.setItems} className={props.className} onSortEnd={sortTheElements} itemChosen={props.itemChosen}/>
}

export default ListOfitems

