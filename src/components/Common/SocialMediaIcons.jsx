import XIcon from "../../../icons/XIcon";
import LinkedinIcon from "../../../icons/LinkedinIcon";
import GithubIcon from "../../../icons/GithubIcon";
import GmailIcon from "../../../icons/GmailIcon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SocialMediaIcons = () => {
    function HoverEffectWrapper({url, children }) {
        return <Link to={url} className="hover-effect-wrapper">{children}</Link>;
    }
  return (
    <>
    <div className="items-center hidden gap-10 pt-10 pb-5 md:flex">
        <HoverEffectWrapper 
          url="https://github.com/Mack2133"
        >
          <div className="flex items-center gap-2">
            <GithubIcon />
            <h1 className="text-lg leading-3 underline cursor-pointer text-zinc-400">
              Github
            </h1>
          </div>
        </HoverEffectWrapper>
        <HoverEffectWrapper 
          url="https://www.linkedin.com/in/ayyoob-ajward/"
        >
          <div className="flex items-center gap-2 mix-md:hidden">
            <LinkedinIcon />
            <h1 className="text-lg leading-3 underline cursor-pointer text-zinc-400">
              LinkedIn
            </h1>
          </div>
        </HoverEffectWrapper>
        <HoverEffectWrapper
          url="https://twitter.com/AyyoobAjwad"
        >
          <div className="flex items-center gap-2 mix-md:hidden">
            <XIcon />
            <h1 className="text-lg leading-3 underline cursor-pointer text-zinc-400">
              Twitter
            </h1>
          </div>
        </HoverEffectWrapper>
        <HoverEffectWrapper
          url="mailto:ajwardayyoob@gmail.com"
        >
          <div className="flex items-center gap-2 min-md:hidden">
            <GmailIcon />
            <h1 className="text-lg leading-3 underline cursor-pointer text-zinc-400">
              Email
            </h1>
          </div>
        </HoverEffectWrapper>
      </div>

      {/* md screens */}
      <div className="flex flex-col items-start pt-5 pb-5 gap-y-2 md:hidden">
        <Button varient="secondary" className="flex justify-start w-full bg-zinc-800 hover:bg-zinc-800">
          <HoverEffectWrapper
             url="https://github.com/Mack2133"
          >
            <div className="flex items-center gap-2">
              <GithubIcon />
              <h1 className="text-lg leading-3 cursor-pointer text-zinc-400">
                Github
              </h1>
            </div>
          </HoverEffectWrapper>
        </Button>
        <Button varient="secondary" className="flex justify-start w-full bg-zinc-800 hover:bg-zinc-800 ">
          <HoverEffectWrapper
            url="https://www.linkedin.com/in/ayyoob-ajward/"
          >
            <div className="flex items-center gap-2 mix-md:hidden">
              <LinkedinIcon />
              <h1 className="text-lg leading-3 cursor-pointer text-zinc-400">
                LinkedIn
              </h1>
            </div>
          </HoverEffectWrapper>
        </Button>
        <Button varient="secondary" className="flex justify-start w-full bg-zinc-800 hover:bg-zinc-800">
          <HoverEffectWrapper
            url="https://twitter.com/AyyoobAjwad"
          >
            <div className="flex items-center gap-2 mix-md:hidden">
              <XIcon />
              <h1 className="text-lg leading-3 cursor-pointer text-zinc-400">
                Twitter
              </h1>
            </div>
          </HoverEffectWrapper>
        </Button>
        <Button varient="secondary" className="flex justify-start w-full bg-zinc-800 hover:bg-zinc-800">
          <HoverEffectWrapper
            url="mailto:ajwardayyoob@gmail.com"
          >
            <div className="flex items-center gap-2 min-md:hidden">
              <GmailIcon />
              <h1 className="text-lg leading-3 cursor-pointer text-zinc-400">
                Email
              </h1>
            </div>
          </HoverEffectWrapper>
        </Button>
      </div>
    </>
  );
}

export default SocialMediaIcons;