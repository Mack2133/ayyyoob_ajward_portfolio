import CustomCard from "../Common/CustomCard";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-start pb-24 bg-gray-200 customSection">
      <div>
        <h1 className="pt-24 pb-24 font-bold text-center text-blue-600 md:pt-0 text-7xl">
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-5">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
