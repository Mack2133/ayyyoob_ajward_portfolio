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

function ProjectCard({ title, description, projectType, technologies, repo, image}) {
  projectType = projectType.toLowerCase();
  return (
    <Card className="w-full mt-5 bg-zinc-800">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2 max-sm:text-xl">{title} 
        <div className="flex-shrink-0">
            {projectType === "group" ? (
                <Badge variant="secondary" className="px-2 bg-zinc-200 hover:bg-zinc-100">
                <span className="mr-2 text-zinc-900">Group</span><img src="https://cdn.hugeicons.com/icons/user-group-stroke-rounded.svg" alt="user-group" width="18" height="18" />
                </Badge>
            ) : projectType == "individual" ? (
                <Badge variant="secondary" className="px-2 bg-zinc-200 hover:bg-zinc-100">
                <span className="mr-2 text-zinc-900">Individual</span><img src="https://cdn.hugeicons.com/icons/user-stroke-rounded.svg" alt="user" width="18" height="18" />
                </Badge>
            ) : 
              <Badge variant="secondary" className="px-2 bg-zinc-200 hover:bg-zinc-100">
              <span className="mr-2 text-zinc-900">Personal</span><img src="https://cdn.hugeicons.com/icons/user-stroke-rounded.svg" alt="user" width="18" height="18" />
              </Badge>
            }
        </div>
        </CardTitle>
        <CardDescription className="text-base leading-6"><div>{description}</div>
            <div className="mt-1">
              {technologies.map((stack, index) => (
                  <Badge key={index} className={"mr-1 mt-1 bg-zinc-300 hover:bg-zinc-300 "}>
                      {stack}
                  </Badge>
              ))}
            </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div
            alt="Soul Nest"
            className="object-cover w-full rounded-md aspect-square bg-zinc-700 lg:max-h-[300px] md:max-h-[250px] sm:max-h-[200px]"
            height="200"
            src={image}
            width="200"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // maxHeight: '300px', // Adjust max height as needed for different screen sizes
            }}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full"
        >
          <img src="https://cdn.hugeicons.com/icons/github-stroke-rounded.svg" alt="github" width="20" height="20" />
          <span className="ml-2">View on Github</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard