import "./App.css";
import Card from "../src/components/card/card";
import ListItem from "../src/components/list-item/list-item";

function App() {
  let cards = [];
  for (let index = 0; index < 10; index++) {
    cards.push(<Card title={`Card Title ${index}`} />);
  }

  const items = [
    {
      id:0,
      date: '2021-01-01',
      title: "title 1",
      description: "description 1",
    }
  ]

  return (
    //loop 1->10
    <div className="App">
      <li className="list-group-item">{cards}</li>

      <hr />
      <h1>concept of composition</h1>
      <ListItem items={items}/>
    </div>
  );
}

export default App;
