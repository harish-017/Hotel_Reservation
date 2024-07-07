import React, { useContext } from "react";
import { SpinnerDotted } from "spinners-react";

import { RoomContext } from "../context/RoomContext";
import Room from "../components/Room";

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);

  return (
    <section className="py-24">
      {loading && (
        <div className="h-screen fixed bottom-0 bg-black/80 w-full top-0 z-50 flex justify-center items-center">
          <SpinnerDotted />
        </div>
      )}

      <div className="container mx-auto lg:px-0">
        <div className="grid grid-cols-1 max-w-sm mx-auto md:grid-cols-2 md:max-w-none md:mx-0   lg:grid-cols-3 gap-[30px]">
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
