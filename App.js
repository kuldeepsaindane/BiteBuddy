import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";

const allRestaurants = [
  {
    id: 23954,
    name: "Barbeque Nation",
    areaName: "Midtown",
    avgRating: "4.30",
    restaurant_image: "koxmlppfprrurmmcvxp9",
    deliveryTime: 35,
  },
  {
    id: 28408,
    name: "Chinese Wok",
    areaName: "Downtown",
    avgRating: "4.50",
    restaurant_image: "e0839ff574213e6f35b3899ebf1fc597",
    deliveryTime: 30,
  },
  {
    id: 30183,
    name: "Persian Darbar",
    areaName: "Byculla",
    avgRating: "4.30",
    restaurant_image: "7aeb2bbff29d99d6e986240911ce0e71",
    deliveryTime: 30,
  },
  {
    id: 32291,
    name: "Cafe Coffee Day",
    areaName: "Shivaji Park",
    avgRating: "4.20",
    restaurant_image: "b70c7d23d197251b7b315b7e4d8173ae",
    deliveryTime: 35,
  },
  {
    id: 68144,
    name: "WarmOven Cake & Desserts",
    areaName: "Koramangala",
    avgRating: "4.30",
    restaurant_image: "e938fb5f416cc2c28b4b519cf27b04cc",
    deliveryTime: 24,
  },
  {
    id: 74444,
    name: "Samosa Party",
    areaName: "Koramangala",
    avgRating: "4.30",
    restaurant_image: "d8d4e708a41f011361c949d44990d5e0",
    deliveryTime: 27,
  },
  {
    id: 75966,
    name: "Kaati Zone Rolls & Wraps",
    areaName: "Koramangala",
    avgRating: "4.00",
    restaurant_image: "ibmfw10arqzrdibq03mt",
    deliveryTime: 24,
  },
  {
    id: 105262,
    name: "UBQ by Barbeque Nation",
    areaName: "Adugodi",
    avgRating: "3.90",
    restaurant_image: "muaktnk5xb3zop4bvj6l",
    deliveryTime: 29,
  },
  {
    id: 376319,
    name: "The Brooklyn Creamery - Healthy Ice Cream",
    areaName: "HSR LAYOUT",
    avgRating: "4.20",
    restaurant_image: "b1b35780a9b1dfeb26d680506d494eaa",
    deliveryTime: 23,
  },
  {
    id: 409726,
    name: "Starboy Pizza & Shakes",
    areaName: "Worli, Mumbai",
    avgRating: "4.30",
    restaurant_image: "o8mbvhnnextaa3xsc9nj",
    deliveryTime: 35,
  },
];

const HeadingComponent = () => {
  return (
    <>
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
