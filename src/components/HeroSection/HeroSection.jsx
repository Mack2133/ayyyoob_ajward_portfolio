import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { myImage } from "../Common/myImage"
import "./Hero.css"
import SocialMediaIcons from "../Common/SocialMediaIcons";

function HeroSection() {
  return (
    <div className="pt-10 md:min-h-[600px] w-full md:w-[650px] mx-auto max-sm:px-5">
      <div className="flex items-center gap-5">
        <div>
          <Avatar className="w-20 h-auto border border-zinc-400">
            <AvatarImage src={myImage} alt="Ayyoob" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Ayyoob Ajward</h1>
          <h2 className="text-lg font-semibold text-zinc-400">
            Computer Science Undergraduate at IIT
          </h2>
        </div>
      </div>

      <div className="pt-7">
        <p className="py-2 text-lg font-medium leading-8 text-zinc-400">
        Motivated and self-directed Computer Science undergraduate with a passion for crafting inventive software solutions. Proficient in Java, Python, React, and Flutter, I excel in debugging code through online research and innovative problem-solving.
        </p>
        <p className="py-2 text-lg font-medium leading-8 text-zinc-400">
        My experience spans web and mobile app development, where I thrive on unraveling code intricacies and constantly honing my skills through exploration and documentation of emerging technologies. I pride myself on being a collaborative team player, known for delivering high-quality work that exceeds expectations.
        </p>
        <div className="hidden md:block">
        <p className="py-2 text-lg font-medium leading-8 text-zinc-400">
        I've contributed to various projects, including developing a Mental Health Chatbot Mobile Application using Flutter, Django, and MongoDB, and crafting a Food Queue Management System using Java. These experiences have not only deepened my understanding of software development but also enhanced my problem-solving abilities.
        </p>
        <p className="py-2 text-lg font-medium leading-8 text-zinc-400">
        In addition to technical skills, I'm certified in digital marketing and advertising strategies by Google and LinkedIn. My commitment to continuous learning is evident through my involvement in various extracurricular activities, such as serving as a member of PR & Media at Mozilla Campus Club and volunteering for IEEE. 
        </p>
        <p className="pt-2 text-lg font-medium leading-8 text-zinc-400">
        Outside of the tech realm, I indulge in studying geopolitics and refining my soft skills, including leadership, attention to detail, and critical thinking. As a Sri Lankan national fluent in Sinhala, English, Tamil, and Arabic, I bring a diverse perspective to every project I undertake. If you're seeking a motivated and dynamic individual with a passion for technology and a drive to excel, I'd love to connect and explore how we can collaborate on exciting ventures together.
        </p>
        </div>
      </div>
      <SocialMediaIcons />
    </div>
    
  )
}

export default HeroSection;
