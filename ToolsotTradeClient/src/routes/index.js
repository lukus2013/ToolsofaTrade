import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Tools from "../views/Tools"
import PropTypes from "prop-types";

export default function Routing() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/tools' element={<Tools />} />
    </Routes>
  );
}


