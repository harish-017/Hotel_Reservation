import React, { createContext, useState, useEffect } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  // global variables that we will need in entire application parts
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = roomData.filter((room) => room.maxPerson >= total);

    setTimeout(() => {
      setRooms(data);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setTotal(adults + kids);
  }, [adults, kids]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        adults,
        kids,
        setAdults,
        setKids,
        total,
        handleClick,
        loading,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
