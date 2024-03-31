import { TypeAnimation } from "react-type-animation";
import CustomTooltip from "../Common/Tooltip";
import { SocialIcon } from "react-social-icons";


function HeroSection() {
  return (
    <div className="p-10 min-h-[600px] w-full flex justify-between items-center lg:px-36 pb-10 lg:flex-row max-md:flex-col-reverse ">
      <div className="">
        <h1 className="pb-2 font-bold text-blue-600 lg:text-7xl md:text-5xl max-sm:text-3xl">
          I'am Ayyoob Ajward
        </h1>
        <TypeAnimation
          sequence={[
            'you call me as "Full Stack Developer".',
            1000,
            'you call me as "(AL-Alim) Islamic Scholar".',
            1000,
            'you call me as "Digital Marketer".',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2rem", display: "inline-block" }}
          repeat={Infinity}
        />
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
      </div>
      <CustomTooltip title={"Ayyoob Ajward"}>
        <div className="max-w-full">
          <div className="overflow-hidden border-8 border-gray-200 rounded-full w-60 h-60">
            <img
              src="../../../public/img/ayyoob-ajward.png"
              className="object-cover w-full h-full"
              alt="Ayyoob Ajward"
            />
          </div>
        </div>
      </CustomTooltip>
    </div>
  );
}

export default HeroSection;
