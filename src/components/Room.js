import React from "react";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { id, name, image, description, size, maxPerson, price } = room;

  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-200 w-full"
          src={image}
          alt="Room"
        />
      </div>
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[40px] flex justify-center items-center -translate-y-1/2 uppercase font-tertiary text-base">
        <div className="flex justify-between w-[80%]">
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen />
            </div>
            <div className="flex gap-x-1">
              <p>Size</p>
              <p>{size}m2</p>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople />
            </div>
            <div className="flex gap-x-1">
              <p>maxperson</p>
              <p>{maxPerson}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="h3">{name}</h3>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>
      <Link
        to={`/rooms/${id}`}
        className="btn btn-sm max-w-[250px] bg-black mx-auto text-white"
      >
        Book Now for ${price}
      </Link>
    </div>
  );
};

export default Room;
