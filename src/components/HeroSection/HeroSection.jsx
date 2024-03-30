import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <div className="min-h-[400px] w-full flex justify-between items-center px-36">
      <div className="max-w-full">
      <h1 className="text-5xl font-bold text-blue-600">I'am Ayyoob Ajward</h1>
      <TypeAnimation
      sequence={[
        'you call me a Full Stack Developer',
        1000,
        'you call me a (Alim) Islamic Scholar',
        // 1000,
        // 'you call me a Web Developer',
        1000,
        'you call me a Digital Marketer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.6em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </div>
      <div className="max-w-full">
        
      </div>
  </div>
  )
}

export default HeroSection;