import React from "react";
import Product from "./Product";
import "./Home.css";
import Sunflower from "./sunflower.jpg";
import Tomato from "./tomato.webp";
import Ladyfinger from "./ladyfinger.webp";
import Strawberry from "./strawberry.jpg";

function Home() {
  const gadgets = [
    {
      title: "Egg",
      type: "Diary",
      description:
        "Farm fresh egg 6 nos",
      url: Sunflower,
      price: 30,
      rating: 4
    },
    {
      title: "Milk",
      type: "Diary",
      description:
        "Farm fresh milma milk",
      url: Tomato,
      price: 25,
      rating: 4
    },
    {
      title: "Paneer",
      type: "Diary",
      description:
        "Fresh paneer",
      url: Ladyfinger,
      price: 100,
      rating: 5
    },
    {
      title: "Strawberry",
      type: "Fruit",
      description:
        "Rich in vitamin C ",
      url: Strawberry,
      price: 99,
      rating: 5
    }
  ];
  return (
    <>
      <div className="banner">
        <br />
        <br />
        <h1 className="heading">BIG BASKET</h1>
      </div>
      <br />
      <br />
      <div className="innerdiv">
        {gadgets.map((gadget) => (
          <Product
            img={gadget.url}
            name={gadget.title}
            description={gadget.description}
            price={gadget.price}
          ></Product>
        ))}
      </div>
    </>
  );
}

export default Home;
