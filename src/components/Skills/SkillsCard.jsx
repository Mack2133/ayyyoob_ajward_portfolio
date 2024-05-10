import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y:100
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 0.4,
      delay: 0.10
    },
  }
}


const SkillsCard = ({title, techStack, description}) => {
  return (
    <motion.div
    variants={fadeAnimationVariants}
    initial="initial"
    whileInView="animate"
    className="w-full"
    viewport={
      {once: true}
    }
    >
    <Card className="w-full mt-5 bg-zinc-800">
    <CardHeader>
      <CardTitle className="flex items-start justify-between gap-2 max-sm:text-xl">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="gap-2">
        <div
          alt="Soul Nest"
        //   className="w-full p-2 grid xl:grid-cols-4 grid-cols-4 md:gap-5 gap-2 md:grid-cols-3  rounded-md aspect-square bg-zinc-700 lg:max-h-[300px] md:max-h-[250px] sm:max-h-[200px]"
          className="grid items-center w-full grid-cols-4 gap-2 p-3 rounded-md md:p-5 xl:grid-cols-4 md:gap-5 md:grid-cols-3 "
          height="200"
          width="200"
        >
            {techStack.map((icon, index) => {
                return (
                      <img
                      key={index}
                      src={icon}
                      className="sm:w-12 sm:h-12 "
                      />
                )
            })}
        </div>
        <CardDescription>
          <p className="mt-5 text-base text-zinc-400">
            {description}
          </p>
        </CardDescription>
      </div>
    </CardContent>
  </Card>
    </motion.div>    
  )
}

export default SkillsCard