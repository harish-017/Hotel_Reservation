import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:id" element={<Rooms />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
