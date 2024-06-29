import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronBarDown } from "react-icons/bs";
const list = [
  { name: "1 adults" },
  { name: "2 adults" },
  { name: "3 adults" },
  { name: "4 adults" },
];

const AdultsDropDown = () => {
  const [adults, setAdults] = useState(0);
  return (
    <Menu as="div" className="bg-whtie relative w-full h-full">
      <Menu.Button className="h-full w-full flex items-center justify-between px-8">
        {adults === 0 ? "0 adults" : `${adults} adults`}
        <BsChevronBarDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40 px-8"
      >
        {list.map((item, index) => (
          <Menu.Item
            as="li"
            className="border-b last-of-type:border-b-0 h-12 hover:text-white  hover:bg-accent-hover w-full flex justify-center text-center items-center cursor-pointer"
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropDown;
