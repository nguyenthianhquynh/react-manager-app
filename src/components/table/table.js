import React from "react";

const Table = (props) => {
  return (
    <div className="overflow-auto table table-striped table-hover" style={{height: "-webkit-fill-available"}}>
      <table>
        {props.data.map((element, index) => {
            return (
                <tr key={index}>
                {element.map((item, index) => (
                    <td key={index}>{item}</td>
                ))}
                </tr>
            );
        })}
      </table>
    </div>
  );
};

Table.defaultProps = {
  data: [],
};

export default Table;
