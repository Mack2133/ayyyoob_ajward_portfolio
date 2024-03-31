import { TypeAnimation } from "react-type-animation";
import './Type.css';


function TypeAnimationCustom() {

  const screen = window.screen.width;

  return (
    <div className="pb-12 sm:pb-0">
        {screen > 480 ? <TypeAnimation
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
          style={{ display: "inline-block" ,fontSize:"1.5rem"}}
          repeat={Infinity}
        /> : <TypeAnimation
        sequence={[
          'I am a "Full Stack Developer".',
          1000,
          'I am a "(AL-Alim) Islamic Scholar".',
          1000,
          'I am a "Digital Marketer".',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: "inline-block" ,fontSize:"1.2rem"}}
        repeat={Infinity}
        >
          
          
          </TypeAnimation>}
    </div>
  )
}

export default TypeAnimationCustom