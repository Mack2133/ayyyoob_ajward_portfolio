import CircleImage from "./CircleImage";
import DownloadCV from "./DownloadCV";
import TypeAnimationCustom from "./TypeAnimationCustom";

function HeroSection() {
  return (
    <div className="p-10 md:min-h-[600px] w-full flex justify-end items-start md:items-center md:justify-between lg:px-36 pb-10 md:px-20 lg:flex-row max-md:flex-col-reverse">
      <div className="">
        <h1 className="pb-2 text-3xl font-bold text-blue-600 lg:text-7xl md:text-5xl">
          <span className="text-3xl text-gray-900">I'am </span>Ayyoob Ajward
        </h1>
        <TypeAnimationCustom />
        <DownloadCV />
      </div>
      <CircleImage />
    </div>
  );
}

export default HeroSection;
