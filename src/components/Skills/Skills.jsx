import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Skills() {
  return (
    <div  className="flex flex-col items-center pt-4 pb-8 md:pt-12 max-sm:px-5">
      <div className="self-start">
        <h1 className="text-3xl font-bold text-zinc-100">Skills</h1>
        <p className="pt-2 text-lg font-medium leading-7 text-zinc-400">I have worked on a variety of projects over the years some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on.</p>
      </div>
      <Card className="w-full mt-5 bg-zinc-800">
    <CardHeader>
      <CardTitle className="flex items-start justify-between gap-2 max-sm:text-xl">
        frontend
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-2">
        <div
          alt="Soul Nest"
          className="object-cover w-full rounded-md aspect-square bg-zinc-700 lg:max-h-[300px] md:max-h-[250px] sm:max-h-[200px]"
          height="200"
          src="images/soul-nest.png"
          width="200"
        />
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
    </div>
  );
}

export default Skills;
