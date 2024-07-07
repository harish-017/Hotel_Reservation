import React, { useContext, useState } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultsDropDown from "./AdultsDropDown";
import KidsDropDown from "./KidsDropDown";
import { RoomContext } from "../context/RoomContext";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);

  return (
    <form className="h-[300px] lg:h-[70px]  w-full">
      <div className="flex flex-col lg:flex-row w-full h-full ">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultsDropDown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropDown />
        </div>
        <button className="btn btn-primary" onClick={(e) => handleClick(e)}>
          Check Now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
