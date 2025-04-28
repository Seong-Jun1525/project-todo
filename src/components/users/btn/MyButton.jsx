import React from "react";
import "./MyButton.scss";

const MyButton = ({ classNameValue, btnText }) => {
  return <button className={classNameValue}>{btnText}</button>;
};

export default MyButton;
