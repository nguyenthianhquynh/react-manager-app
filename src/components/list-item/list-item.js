import Card from "../card/card";
import Item from "../item/item";
import Form from "../form/form";
import { useState } from "react";

const ListItem = (props) => {
  const [items, setItems] = useState([]);
  const addItemHandle = (item) => {
    setItems([...items, item]);
  }
  return (
    <Card className='pb-2 mx-2'>
      <Form addItem={addItemHandle}></Form>
      {
        items.map((item) => {
          return <Item date={item.date} title ={item.title} price={item.price}/>
        })
      }
    </Card>
  );
};
export default ListItem;
