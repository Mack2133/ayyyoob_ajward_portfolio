import React from "react";
import { Avatar } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";

function Navbar() {
  return (
    <nav className="h-20 shadow-sm bg-gray-50">
      <div className="container flex items-center justify-between h-full px-10 mx-auto lg:px-20">
        <Tooltip
          showArrow
          placement="bottom"
          content="Ayyoob Ajward"
          classNames={{
            base: [
              // arrow color
              "before:bg-neutral-400 dark:before:bg-white",
            ],
            content: [
              "py-2 px-4 shadow-xl",
              "text-black bg-gradient-to-br from-white to-neutral-200",
            ],
          }}
        >
          <Avatar
            isBordered
            color="primary"
            src={"public/img/ayyoob ajward.png"}
            size="xl"
            className="cursor-pointer"
          />
        </Tooltip>
        <ul className="flex items-center space-x-16">
          <li className="font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">Projects</li>
          <li className="font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">About</li>
          <li className="font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
