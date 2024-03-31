import Marquee from "react-fast-marquee";
import CustomMarquee from "./CustomMarquee";

function TechStack() {
  return (
    <div className="flex items-center justify-center h-40 bg-gray-800">
      <Marquee
      speed={80}
      >
        <CustomMarquee />
      </Marquee>
    </div>
  );
}

export default TechStack;
