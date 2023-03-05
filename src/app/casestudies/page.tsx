import ProjectCard from "../../../components/ProjectCard"

const page = () => {
  return (
    <div className="scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-slate-700">
      <div className="max-w-5xl mx-auto py-20 grid grid-cols-3 ">
            <ProjectCard projectName="Octane Portfolio OS" projectSummary="Modern developer portfolio website" techCard1="React" techCard2="Tailwind CSS" techCard3="Javascript"/>
            <ProjectCard projectName="Souqify" projectSummary="Your plug for house finishing products" techCard1="Liquid" techCard2="Javascript" techCard3="CSS/SCSS"/>
            <ProjectCard projectName="Chat GPT Clone 1.1" projectSummary="I created a clone of the popular AI chatbot" techCard1="NextJS" techCard2="Tailwind CSS" techCard3="Vercel"/>
            <ProjectCard projectName="Octane Portfolio OS" projectSummary="Modern developer portfolio website" techCard1="React" techCard2="Tailwind CSS" techCard3="Javascript"/>
            <ProjectCard projectName="Souqify" projectSummary="Your plug for house finishing products" techCard1="Liquid" techCard2="Javascript" techCard3="CSS/SCSS"/>
            <ProjectCard projectName="Chat GPT Clone 1.1" projectSummary="I created a clone of the popular AI chatbot" techCard1="NextJS" techCard2="Tailwind CSS" techCard3="Vercel"/>
        
        </div>
    </div>
  )
}

export default page