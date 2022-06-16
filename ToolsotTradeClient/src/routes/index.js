import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Tools from "../views/Tools"
import NewTool from "../views/NewTool"
import Inventory from "../views/Inventory";

export default function Routing() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/tools' element={<Tools />} />
      <Route exact path='/addTool' element={<NewTool />} />
      <Route exact path='/inventory' element={<Inventory />} />
    </Routes>
  );
}


