import Card from "../card/card";
import Item from "../item/item";

const ListItem = (props) => {
  return (
    <Card className='pb-2 mx-2'>
      <Item date= {props.items[0].date}></Item>
      <Item date= {props.items[0].date}></Item>
    </Card>
  );
};
export default ListItem;
