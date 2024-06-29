import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.module.css";
import "../datepicker.css";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);

  return (
    <div className="relative flex items-center justify-end  h-full">
      <div className="absolute z-10 pr-8">
        <BsCalendar />
      </div>
      <DatePicker
        className="h-full w-full"
        placeholderText="Check In"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
