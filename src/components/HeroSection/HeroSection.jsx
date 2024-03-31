import { TypeAnimation } from 'react-type-animation';
import CustomTooltip from '../Common/Tooltip';

function HeroSection() {
  return (
    <div className="min-h-[600px] w-full flex justify-between items-center md:px-36 pb-10">
      <div className="max-w-full">
        <h1 className="font-bold text-blue-600 text-7xl">I'am Ayyoob Ajward</h1>
        
        <TypeAnimation
          sequence={[
            'you call me as "Full Stack Developer".',
            1000,
            'you call me as "(AL-Alim) Islamic Scholar".',
            // 1000,
            // 'you call me as a Web Developer',
            1000,
            'you call me as "Digital Marketer".',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2rem', display: 'inline-block' }}
          repeat={Infinity}
        />
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