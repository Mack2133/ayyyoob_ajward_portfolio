import CustomTooltip from "../Common/Tooltip";
import { SocialIcon } from "react-social-icons";

function DownloadCV() {
  return (
    <div className="flex my-5 space-x-5">
      <CustomTooltip title={"Download CV/Resume"}>
        <button className="py-3 px-7 btn">Download CV</button>
      </CustomTooltip>
      <CustomTooltip title={"visit my linkedin"}>
        <SocialIcon
          url="https://www.linkedin.com/in/ayyoob-ajward/"
          fgColor="#fff"
          bgColor="#000"
          style={{ height: 50, width: 50 }}
        />
      </CustomTooltip>
      <CustomTooltip title={"visit my github"}>
        <SocialIcon
          url="https://www.github.com/Mack2133"
          fgColor="#fff"
          bgColor="#000"
          style={{ height: 50, width: 50 }}
        />
      </CustomTooltip>
    </div>
  );
}

export default DownloadCV;
