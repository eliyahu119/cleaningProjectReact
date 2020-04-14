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
  padding-left:1%
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
    var [items, setItems]=props.Items
   return (
     <div className={props.className}>
       <List>  
       <Header>{props.name}</Header>
           {       
                    items.map((item, index) =>{
                     var backgroundColor=itemChossen===index?"#afe6da":"";
                      return(
                      <SortableItem  ey={`item-${index}`}  index={index} key={index} style={{backgroundColor:backgroundColor}}>
                      {item}
                      <RemBt items={items} setItems={setItems} index={index} />
                      <Sign setItemChossen={setItemChossen}  index={index} />
                     </SortableItem>
                     )
                  }
               )           
           }
        <AddItems><AddItemsprop items={items} setItems={setItems} name={props.name} /></AddItems>
       </List>
   </div>
   );
});


 function ListOfitems(props){
    var [items, setItems]=props.Items
     var sortTheElements=({oldIndex,newIndex})=>{
        const removed=items.slice(0,oldIndex)
        .concat(items.slice(oldIndex+1));
        setItems(
        removed.slice(0,newIndex)
        .concat([items[oldIndex]])
        .concat(removed.slice(newIndex)))

             //The set of the marking the right variable in the list
             var [itemChossen,setItemChossen]=props.itemChosen
             if(itemChossen===oldIndex)
             {
             setItemChossen(newIndex)
             } else 
             if((itemChossen>oldIndex)&&itemChossen<=newIndex)  {  
             setItemChossen(itemChossen-1)
             }
              else
            if((itemChossen<oldIndex)&&itemChossen>=newIndex)
             setItemChossen(itemChossen+1)
    }
    return <SortableList Items={props.Items} name={props.name} className={props.className} onSortEnd={sortTheElements} itemChosen={props.itemChosen}/>
}

export default ListOfitems

