import React from "react";
import "./MyInput.scss";

export const MyInput = ({ typeText, placeholderValue, nameValue, style }) => {
  return <input style={style} className="my-input-text" name={nameValue} type={typeText} placeholder={placeholderValue} />;
};

export const SearchInput = ({ searchName }) => {
  return <input type="text" className="search-input" name={searchName} placeholder="할 일 검색" />;
};
