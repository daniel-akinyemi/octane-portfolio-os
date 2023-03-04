type ProjectProps = {
    projectName:string
    projectSummary:string
    techCard1:string
    techCard2:string
    techCard3:string
}

const ProjectCard = (props: ProjectProps) => {
  return (
    <div>
        <div className="bg-gray-500 h-80 w-72 rounded-md cursor-pointer px-4 mx-6">
              <p className="font-semibold text-lg pt-[60%]">{props.projectName}</p>
              <p className="text-md">{props.projectSummary}</p>
              <div className="flex pt-2">
              <p className="tech-stack-card">{props.techCard1}</p>
              <p className="tech-stack-card">{props.techCard2}</p>
              <p className="tech-stack-card">{props.techCard3}</p>
              </div>
              
            </div>
    </div>
  )
}

export default ProjectCard