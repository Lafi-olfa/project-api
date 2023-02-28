import React from "react";
import { Card } from "react-bootstrap";
import App from "../App.css";
const FoodCard = ({ el }) => {
  console.log(el);
  return (
    <div>
      <Card
        id="card"
        style={{
          width: "18rem",
          height: "25rem",
          margin: "20px",
          justifyContent: "space-arround",
          backgroundColor: "red",
        }}
      >
        <Card.Img variant="top" alt="image not found " src={el.food.image} />
        <Card.Body>
          <Card.Title>{el.food.label}</Card.Title>
          <Card.Text> {el.food.category} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
