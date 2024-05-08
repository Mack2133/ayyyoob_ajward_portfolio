import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const SkillsCard = ({title, techStack}) => {
  return (
    <Card className="w-full mt-5 bg-zinc-800">
    <CardHeader>
      <CardTitle className="flex items-start justify-between gap-2 max-sm:text-xl">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-2">
        <div
          alt="Soul Nest"
          className="w-full p-2 flex flex-wrap items-start justify-center rounded-md aspect-square bg-zinc-700 lg:max-h-[300px] md:max-h-[250px] sm:max-h-[200px]"
          height="200"
          width="200"
        >
            {techStack.map((icon, index) => {
                return (
                    <img
                    key={index}
                    src={icon}
                    // className="w-1/4 p-2 md:w-1/4 md:h-1/4 xl:w-1/3 xl:h-1/3 h-1/4"
                    className="w-1/4 p-2 md:w-1/4 md:h-1/4 xl:w-1/3 xl:h-1/3 h-1/4"
                    />
                )
            })}
        </div>
        <CardDescription>
          <p className="text-base text-zinc-400">
            I have worked on a variety of projects over the years some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on.
          </p>
        </CardDescription>
      </div>
    </CardContent>
    {/* <CardFooter>
      <Button className="w-full"
      >
        <img src="https://cdn.hugeicons.com/icons/github-stroke-rounded.svg" alt="github" width="20" height="20" />
        <span className="ml-2">View on Github</span>
      </Button>
    </CardFooter> */}
  </Card>    
  )
}

export default SkillsCard