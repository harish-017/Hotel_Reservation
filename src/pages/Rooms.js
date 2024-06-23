import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Rooms = () => {
  const { id } = useParams();
  return (
    <>
      <div>Rooms - {id}</div>
    </>
  );
};

export default Rooms;
