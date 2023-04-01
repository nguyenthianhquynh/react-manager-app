import Card from "../card/card";
import Date from "../date/date";

function Item(props) {
  return (
    <Card className='mt-2 mx-2'>
      <div className="card-body">
        <div className="d-flex flex-wrap flex-row align-items-center">
          <Date date={props.date}/>
          <div className='flex-grow-1 text-left'>
            <span>
                s
              {/* {props.title}
              Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
            </span>
          </div>
          <div>
            <button className="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Item;
