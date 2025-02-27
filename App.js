import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import ReserveTable from "./components/ReserveTable/ReserveTable";

const AppLayout = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/reserve" element={<ReserveTable />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
