import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const SkillsCard = ({title, techStack, description}) => {
  return (
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
          className="grid items-center w-full grid-cols-4 gap-2 p-3 rounded-md md:p-5 xl:grid-cols-4 md:gap-5 md:grid-cols-3 bg-zinc-700"
          height="200"
          width="200"
        >
            {techStack.map((icon, index) => {
                return (
                    // <div className="">
                        <img
                        key={index}
                        src={icon}
                        // className="w-1/4 p-2 md:w-1/4 md:h-1/4 xl:w-1/3 xl:h-1/3 h-1/4"
                        // className="w-1/4 p-2 md:w-1/4 md:h-1/4 xl:w-1/3 xl:h-1/3 h-1/4"
                        className="w-18 h-18"
                        />
                    // </div>
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
  )
}

export default SkillsCard