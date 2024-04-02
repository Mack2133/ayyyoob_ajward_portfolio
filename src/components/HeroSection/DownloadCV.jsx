import CustomTooltip from "../Common/Tooltip";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function DownloadCV() {
  return (
    <div className="flex my-5 space-x-5">
      <CustomTooltip title={"Download CV/Resume"}>
        <button className="px-4 py-3 md:px-7 btn"><Link to="https://drive.google.com/drive/folders/13YnZNY7MEvAL80Q_fqZlnnsiAVgzxm1n?usp=sharing" target="_blank">Download CV</Link></button>
      </CustomTooltip>
      <CustomTooltip title={"visit my linkedin"}>
        <SocialIcon
          url="https://www.linkedin.com/in/ayyoob-ajward/"
          fgColor="#fff"
          bgColor="#000"
          target="_blank"
          style={{ height: 50, width: 50 }}
        />
      </CustomTooltip>
      <CustomTooltip title={"visit my github"}>
        <SocialIcon
          url="https://www.github.com/Mack2133"
          target="_blank"
          fgColor="#fff"
          bgColor="#000"
          style={{ height: 50, width: 50 }}
        />
      </CustomTooltip>
    </div>
  );
}

export default DownloadCV;
