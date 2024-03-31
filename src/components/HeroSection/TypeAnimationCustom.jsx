import { TypeAnimation } from "react-type-animation";
import './Type.css';


function TypeAnimationCustom() {


  return (
    <div>
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
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
    </div>
  )
}

export default TypeAnimationCustom