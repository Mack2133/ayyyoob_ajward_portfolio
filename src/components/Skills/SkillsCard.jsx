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

const SkillsCard = ({title}) => {
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
  )
}

export default SkillsCard