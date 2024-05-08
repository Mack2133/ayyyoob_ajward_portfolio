import SkillsCard from "./SkillsCard";
import { html5, css3, dart, django, express, flutter, git, javascript, java, jwtio, mongodb, nextjs, nodejs, python, reactnative, react, tailwindcss, typescript, vercel,photoshop, illustrator, googleAds, figma, facebook } from "./icons/icons_export";

function Skills() {
  return (
    <div  className="flex flex-col items-center pt-4 pb-8 md:pt-12 max-sm:px-5">
      <div className="self-start">
        <h1 className="text-3xl font-bold text-zinc-100">Skills</h1>
        <p className="pt-2 text-lg font-medium leading-7 text-zinc-400">I have worked on a variety of projects over the years some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on.</p>
      </div>
      <SkillsCard 
        title={"Frontend"}
        techStack={[html5, css3, javascript, react, tailwindcss, typescript, flutter, dart, reactnative, nextjs, figma]}
        description={"I have worked on a variety of projects over the years some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on."}
      />
      <SkillsCard 
        title={"Backend"}
        techStack={[java, python, nodejs, express, django, mongodb, jwtio]}
        description={"I have worked on variety of projects in backend developement. I have worked on a variety of projects over the years some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on."}
      />
      <SkillsCard 
        title={"Mobile Development"}
        techStack={[flutter, dart, reactnative]}
        description={"I have to solve my own pain points. Here are some of the projects that I have worked on."}
      />
      <SkillsCard 
        title={"DevOps"}
        techStack={[git, vercel]}
        description={"I have worked on Here are some of the projects that I have worked on."}
      />
      <SkillsCard 
        title={"Digital Marketing"}
        techStack={[googleAds, facebook]}
        description={"I have worked on variety of projects in Digital Marketing. Here are some of the projects that I have worked on."}
      />
      <SkillsCard 
        title={"Graphic Design"}
        techStack={[photoshop, illustrator]}
        description={"I have worked on variety of projects in Graphic Design. I have worked on a variety of projects over the years some of them as a hobby."}
      />
    </div>
  );
}

export default Skills;
