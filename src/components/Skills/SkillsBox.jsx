import React from "react";
import StackIcon from "tech-stack-icons";
import CustomTooltip from "../Common/Tooltip";
import {Tooltip} from "@nextui-org/react";


function SkillsBox({ title, stacks, id }) {
  return (
    <>
      <div className="h-[300px] sm:min-w-96 max-sm:min-w-[360px] bg-transparent ring-1 ring-gray-300 rounded-md overflow-hidden backdrop-blur-md">
        <div className="w-full h-10 bg-gray-900">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-xl text-center text-white">{title}</h1>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5 m-5 lg:grid-cols-4 md:grid-cols-3">
              {stacks.map((stack) => {
                return (
                  <Tooltip
                    showArrow
                    placement="bottom"
                    content={stack}
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
                    <StackIcon
                      key={id}
                      name={stack}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsBox;
