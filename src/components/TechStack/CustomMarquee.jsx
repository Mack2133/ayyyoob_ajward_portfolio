import StackIcon from "tech-stack-icons";

const stacks = [
    "reactjs",
    "nextjs",
    "typescript",
    "tailwindcss",
    "bootstrap5",
    "nodejs",
    "express",
    "mongodb",
    "mysql",
    "css3",
    "html5",
    "java",
    "js",
    "python",
    "ps",
    "ai",
    "figma",
    "wordpress",
    "git",
    "github",
    "flutter",
    "dart",
    "postman",
    "vitejs",
    "babel",

];

function CustomMarquee() {
  return (
    <div className="space-x-10">
        {stacks.map((stack,index) => {
            return (
                <StackIcon
                    grayscale={false}
                    key={index}
                    name={stack}
                    style={{ width: "75px", height: "75px"}}
                />
            )
        })}
    </div>
  )
}

export default CustomMarquee