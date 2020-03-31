import styled from 'styled-components'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import React from 'react';
import RemBt from './removalButton'

 

const Item = styled.li`
  display: block;
  border-top: 1px solid #888;
  list-style-type: none;
  padding: 5px 0;
  &:hover {
      background: #EEE;
  }  
`;

const List = styled.ul`
    margin: auto;
    padding-left: 0;
    width: (100% - 20px);

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
        console.log(props)
        props.items.current=["hello"]
   return (
  <div>
       <List>  
       <Header>{props.name}</Header>
           {       
                    props.items.map((item, index) => (
                   <SortableItem  ey={`item-${index}`}  index={index} key={index}>
                    {item}
                   <RemBt items={props.items} setItems={props.setItems} index={index} />
                   </SortableItem>
                   
               ))
           }
        <AddItems></AddItems>
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
               .concat(removed.slice(newIndex))
          )
    }
         
    //const [items, setItems] = useState(props.items);  
      return <SortableList items={props.items} name={props.name} setItems={props.setItems} className={props.className}onSortEnd={sortTheElements}
      />
}

       
export default ListOfitems