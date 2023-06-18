import { useState } from "react";
import Icon from "../Icon/Icon";
import Card from "../card/card";
import Date from "../date/date";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Item(props) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <Card className="mt-2 mx-2">
      <div className="card-body">
        <div className="d-flex flex-wrap flex-row align-items-center">
          <Date date={props.date} />
          <div className="flex-grow-1 text-left">
            <span className="px-2">{props.title}</span>
          </div>
          <div>
            <button className="btn btn-primary">{props.price}</button>
            <button className="p-2" onClick={() => setShowConfirmModal(true)}>
              <Icon icon={faTrash} color={"red"} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Item;
