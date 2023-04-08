import Card from "../card/card";

const Date = (props) => {
    //just get day 
    const month = new window.Date(props.date).toLocaleString('en-US', { month: 'long' });
    const day = new window.Date(props.date).toLocaleString('en-US', { day: '2-digit' });
    const year = new window.Date(props.date).getFullYear();

  return (
    <Card>
      <div className="card-body text-white bg-secondary rounded">
        <div className="d-flex flex-column">
            <div className="fs-5 fw-bold">{month}</div>
            <div>{year}</div>
            <div className="fs-3 fw-bold">{day}</div>
        </div>
      </div>
    </Card>
  );
};

export default Date;
