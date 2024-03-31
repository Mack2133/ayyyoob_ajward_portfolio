import {Tooltip} from "@nextui-org/react";

function CustomTooltip({children, title}) {
  return (
    <>
        <Tooltip
          showArrow
          placement="bottom"
          content={title}
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
          {children}
        </Tooltip>
    </>
  )
}

export default CustomTooltip