import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronBarDown } from "react-icons/bs";

const list = [
  { name: "0 Kids" },
  { name: "1 Kids" },
  { name: "2 Kids" },
  { name: "3 Kids" },
  { name: "4 Kids" },
];

const KidsDropDown = () => {
  const [kids, setKids] = useState(0);
  return (
    <Menu as="div" className="bg-whtie relative w-full h-full">
      <Menu.Button className="h-full w-full flex items-center justify-between px-8">
        {kids === 0 ? "0 kids" : `${kids} kids`}
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

export default KidsDropDown;
