import ProjectsCard from "./ProjectsCard";
import { projects } from "./data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div>
      <div
        name="projects"
        className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <section className="py-20 align-element" id="projects">
            <SectionTitle text="web creations" />
            <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project) => {
                return <ProjectsCard key={project.id} {...project} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
