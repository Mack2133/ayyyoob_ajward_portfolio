import SkillsCard from "./SkillsCard";
import { html5, css3, dart, django, express, premierPro, flutter, git, javascript, java, jwtio, mongodb, nextjs, nodejs, python, reactnative, react, tailwindcss, typescript, vercel,photoshop, illustrator, googleAds, figma, facebook } from "./icons/icons_export";

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
        description={"Adept at crafting engaging and responsive user interfaces, seamlessly blending aesthetics with functionality across web and mobile platforms. Experienced in leveraging modern frameworks and libraries to build performant and accessible applications."}
      />
      <SkillsCard 
        title={"Backend"}
        techStack={[java, python, nodejs, express, django, mongodb, jwtio]}
        description={"Skilled in developing robust and scalable server-side solutions, leveraging efficient data management, secure APIs, and high-performance processing. Experienced in integrating various technologies and services to power dynamic application functionality."}
      />
      <SkillsCard 
        title={"Mobile Development"}
        techStack={[flutter, dart, reactnative]}
        description={"Proficient in building cross-platform mobile applications with a focus on native user experiences. Skilled in leveraging platform-specific APIs and tools to create smooth animations, efficient data handling, and seamless integration with device hardware.Proficient in building cross-platform mobile applications with a focus on native user experiences. Skilled in leveraging platform-specific APIs and tools to create smooth animations, efficient data handling, and seamless integration with device hardware."}
      />
      <SkillsCard 
        title={"DevOps"}
        techStack={[git, vercel]}
        description={"Experienced in implementing streamlined development and deployment workflows through automation tools and processes. Skilled in containerization, infrastructure provisioning, continuous integration/delivery pipelines, and monitoring solutions to ensure efficient and reliable software delivery."}
      />
      <SkillsCard 
        title={"Digital Marketing"}
        techStack={[googleAds, facebook]}
        description={"Adept at driving online visibility and engagement through strategic content creation, search engine optimization, social media management, and data-driven advertising campaigns. Experienced in leveraging analytics tools to measure performance and optimize digital marketing efforts for maximum impact."}
      />
      <SkillsCard 
        title={"Graphic Design"}
        techStack={[photoshop, illustrator, premierPro]}
        description={"Skilled in creating visually compelling designs and assets that effectively communicate brand identity and messaging. Experienced in utilizing industry-standard graphic design tools to produce print and digital materials, including logos, branding, marketing assets."}
      />
    </div>
  );
}

export default Skills;
