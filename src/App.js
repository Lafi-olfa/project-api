import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import CardList from "./components/CardList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [load, setLoad] = useState(true);
  //
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: text },
    headers: {
      "X-RapidAPI-Key": "bb1a2e6162msh25458842d42981ap1ed4a0jsn162f538c0806",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const getFoods = async () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.hints);
          setResult(response.data.hints);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getFoods();
    setLoad(false);
  }, []);
  console.log(result);

  //
  const handelSubmit = (e) => {
    e.preventDefault();
    const getFoods = async () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.hints);
          setResult(response.data.hints);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getFoods();
  };
  return (
    <div>
      {load ? (
        <p> Loading .....</p>
      ) : (
        <form id="form" onSubmit={handelSubmit}>
          <input
            className="input"
            placeholder="Search ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit"> okk</button>
        </form>
      )}
      <CardList
        result={result.filter((el) =>
          el.food.label
            .trim()
            .toLowerCase()
            .includes(text.trim().toLocaleLowerCase())
        )}
      />
    </div>
  );
};

export default App;
// result.map((el) => <div> {el.food.label} </div>)
