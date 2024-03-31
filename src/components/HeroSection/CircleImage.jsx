import CustomTooltip from "../Common/Tooltip";
import { myImage } from "../Common/myImage";

function CircleImage() {
  return (
    <>
        <CustomTooltip title={"Ayyoob Ajward"}>
          <div className="w-32 h-32 overflow-hidden border-8 border-gray-200 rounded-full max-md:mb-6 md:w-40 md:h-40 lg:w-60 lg:h-60">
            <img
              src={myImage}
              className="object-cover w-full h-full"
              alt="Ayyoob Ajward"
            />
          </div>
      </CustomTooltip>
    </>
  )
}

export default CircleImage