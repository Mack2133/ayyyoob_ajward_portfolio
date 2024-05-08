import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <div  className="flex flex-col items-center pt-4 pb-8 md:pt-12 max-sm:px-5">
      <div className="self-start">
        <h1 className="text-3xl font-bold text-zinc-100">Skills</h1>
        <p className="pt-2 text-lg font-medium leading-7 text-zinc-400">I have worked on a variety of projects over the years some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on.</p>
      </div>
      <SkillsCard 
        title={"Frontend"}
      />
      <SkillsCard 
        title={"Backend"}
      />
      <SkillsCard 
        title={"Mobile Development"}
      />
      <SkillsCard 
        title={"DevOps"}
      />
    </div>
  );
}

export default Skills;
