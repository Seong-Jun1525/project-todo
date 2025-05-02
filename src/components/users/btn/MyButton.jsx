import React from "react";
import "./MyButton.scss";

const MyButton = ({ classNameValue, btnText, typeText }) => {
  return (
    <button type={typeText} className={classNameValue}>
      {btnText}
    </button>
  );
};

export default MyButton;
