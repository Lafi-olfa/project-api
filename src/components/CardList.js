import React from "react";
import FoodCard from "./FoodCard";

const CardList = ({ result }) => {
  console.log(result);
  return (
    <div  style={{ display:"flex",flexWrap:"wrap"}}>
      {result.map((el, i) => (
        <div key={el.id} >
          {" "}
          <FoodCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
