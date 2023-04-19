import Table from "../table/table";
import Form from "../form/form";

const Main = () => {
  const data = []

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 20; j++) {
        if (i === 0)
            row.push(`column ${i}`);
        else
            row.push(`element ${j}`);
    }
    data.push(row);
  }
  return (
    <div className="main px-2">
      <div className="top-main">
        <Form />
      </div>
      <div className="bottom-main">
        <Table data={data} />
      </div>
    </div>
  );
};
export default Main;
