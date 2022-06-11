import React from "react";
import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

export default function Routing({setHeaderText}) {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  );
}

Routing.propTypes = {
  setHeaderText: PropTypes.func.isRequired,
};
