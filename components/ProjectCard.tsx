import {
  ArrowTopRightOnSquareIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";
type ProjectProps = {
  projectName: string;
  projectSummary: string;
  techCard1: string;
  techCard2: string;
  techCard3: string;
  projectLink: string;
  backgroundImage: string;
  githubLink: string;
};

const ProjectCard = (props: ProjectProps) => {
  return (
    <div className="space-y-4 p-4 bg-neutral-900/20 border shadow-md border-white/5 hover:border-white/10 hover:bg-neutral-900/30 transition-all duration-300">
      <div
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  }}
  className="h-80 max-w-6xl mx-auto text-white"
></div>
      <div className="space-y-4">
        <div className=" h-36 rounded-md  px-4 md:px-0 py-2 mx-auto md:mx-0  w-full mb-12 text-white  ">
          <p className="font-extrabold text-lg ">{props.projectName}</p>
          <p className="text-sm pt-2 h-12">{props.projectSummary}</p>
          <div className="flex py-2">
            <p className="tech-stack-card">{props.techCard1}</p>
            {props.techCard2 && (
              <p className="tech-stack-card">{props.techCard2}</p>
            )}
            {props.techCard3 && (
              <p className="tech-stack-card">{props.techCard3}</p>
            )}
          </div>
          <div className="flex gap-x-4 items-center">
            <a
              href={`${props.githubLink}`}
              target="_blank"
              className={
                props.githubLink === ""
                  ? `hidden`
                  : `flex cursor-pointer text-white items-center`
              }
            >
              {/* <span className="underline pr-4 ">View Live Site</span> */}
              <CodeBracketSquareIcon className="h-5 w-5 underline my-2  cursor-pointer" />
            </a>
            <a
              href={`${props.projectLink}`}
              target="_blank"
              className={
                props.projectLink === ""
                  ? `hidden`
                  : `flex cursor-pointer text-white items-center`
              }
            >
              {/* <span className="underline pr-4 ">View Live Site</span> */}
              <ArrowTopRightOnSquareIcon className="h-5 w-5 underline my-2  cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechStackCard = (props: { techStack: string }) => {
  return <p className="tech-stack-card">{props.techStack}</p>;
};

export default ProjectCard;
