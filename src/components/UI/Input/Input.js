import React, { useRef } from "react";

const Input = (props) => {
  const inputRef = useRef();

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        ref={inputRef}
        type={props.type}
        value={props.value}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        autoFocus
      />
    </div>
  );
};

export default Input;
