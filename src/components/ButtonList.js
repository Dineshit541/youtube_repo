import React from "react";
import Button from "./Button";
import { categories } from "../data/categories";

const ButtonList = () => {
  return (
    <div className=" flex">
      {categories.map((category, ind) => (
        <Button key={ind} data={category} />
      ))}
    </div>
  );
};

export default ButtonList;
