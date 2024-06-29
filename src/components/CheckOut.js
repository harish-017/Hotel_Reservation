import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar } from "react-icons/bs";
import "../datepicker.css";

import "react-datepicker/dist/react-datepicker.module.css";

const CheckIn = () => {
  const [endDate, setendDate] = useState(false);

  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <BsCalendar />
      </div>
      <DatePicker
        className="h-full w-full"
        placeholderText="Check Out"
        selected={endDate}
        onChange={(date) => setendDate(date)}
      />
    </div>
  );
};

export default CheckIn;
