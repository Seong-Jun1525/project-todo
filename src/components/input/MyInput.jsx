import React from "react";
import "./MyInput.scss";

export const MyInput = (props) => {
  return <input {...props} />;
};

export const SearchInput = ({ searchName }) => {
  return <input type="text" className="search-input" name={searchName} placeholder="할 일 검색" />;
};
