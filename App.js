import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

const AppLayout = () => {
  return (
    <div className="app">
      {<Header />}
      {<Body />}
      {<Footer />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
