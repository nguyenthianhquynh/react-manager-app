import { formatDateToString } from "../../helps/common";
import ConfirmModal from "../UI/modals/ConfirmModal";
import React, { useState, useRef } from 'react';

const Form = (props) => {
  let isShowModel = useRef(false);
  isShowModel.current = false;
  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);

  const [item, setItem] = useState({
    title: "",
    date: formatDateToString(new Date()),
    price: 0.0,
  });

  

  const addItem = (event) => {
    event.preventDefault();
    props.addItem(item);
    clearForm();
  };

  const submitHandle = (event) => {
    event.preventDefault();
    isShowModel.current = true;
    setShow(!show);
  };

  const onChangeItem = (event) => {
    //if all fields are filled, enable the button
    if (item.title !== "" && item.date !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const clearForm = () => {
    setItem({
      title: "",
      date: formatDateToString(new Date()),
      price: 0.0,
    });
    setDisabled(false);
  };

  return (
    <>
      <ConfirmModal show={show} />
      <div className="mt-2 mx-2" style={{ height: "-webkit-fill-available" }}>
      {/* <form onSubmit={addItem}>
        <div>
          <label>TITLE</label>
          <div>
            <input
              value={item.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={onChangeItem}
            />
          </div>
        </div>
        <div>
          <label>DATE</label>
          <div>
            <input
              value={item.date}
              type="date"
              name="date"
              placeholder="date"
              onChange={onChangeItem}
            />
          </div>
        </div>
        <div>
          <label></label>
          <div>
            <input
              value={item.price}
              type="number"
              name="price"
              placeholder="price"
              onChange={onChangeItem}
            />
          </div>
        </div>
        <div>
          <div>
            <button type="submit" disabled={disabled}>
              Add Item
            </button>
          </div>
        </div>
      </form> */}
      <form class="row g-3" onSubmit={submitHandle}>
        <div class="col-auto">
          <label for="staticEmail2" class="visually-hidden">Email</label>
          <input type="text" class="form-control" value="email@example.com"/>
        </div>
        <div class="col-auto">
          <label for="staticEmail2" class="visually-hidden">Email</label>
          <input type="text" class="form-control" value="email@example.com"/>
        </div>
        <div class="col-auto">
          <label for="staticEmail2" class="visually-hidden">Email</label>
          <input type="text" class="form-control" value="email@example.com"/>
        </div>
        <div class="col-auto">
          <label for="staticEmail2" class="visually-hidden">Email</label>
          <input type="text" class="form-control" value="email@example.com"/>
        </div>
        <div class="col-auto">
          <label for="inputPassword2" class="visually-hidden">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Form;
