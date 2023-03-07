import ProjectCard from "../../../components/ProjectCard"
import octaneHero from '../../../public/octanehero.png'


const page = () => {
  return (
    <div className="scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-slate-700 mx-auto">
      <div className="max-w-5xl mx-auto py-20 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
            <ProjectCard projectName="Octane Portfolio OS" projectSummary="Modern developer portfolio website" techCard1="React" techCard2="Tailwind CSS" techCard3="Javascript" projectLink="#" backgroundImage={`${octaneHero.src}`}/>
            <ProjectCard projectName="Souqify" projectSummary="Your plug for house finishing products" techCard1="Liquid" techCard2="Javascript" techCard3="CSS/SCSS" projectLink="https://souqify.com" backgroundImage={`${octaneHero}`}/>
            <ProjectCard projectName="Chat GPT Clone 1.1" projectSummary="I created a clone of the popular AI chatbot" techCard1="NextJS" techCard2="Tailwind CSS" techCard3="Vercel" projectLink="#" backgroundImage={`${octaneHero}`}/>
            <ProjectCard projectName="Octane Portfolio OS" projectSummary="Modern developer portfolio website" techCard1="React" techCard2="Tailwind CSS" techCard3="Javascript" projectLink="#" backgroundImage={`${octaneHero}`}/>
            <ProjectCard projectName="Souqify" projectSummary="Your plug for house finishing products" techCard1="Liquid" techCard2="Javascript" techCard3="CSS/SCSS" projectLink="#" backgroundImage={`${octaneHero}`}/>
            <ProjectCard projectName="Chat GPT Clone 1.1" projectSummary="I created a clone of the popular AI chatbot" techCard1="NextJS" techCard2="Tailwind CSS" techCard3="Vercel" projectLink="#" backgroundImage={`${octaneHero}`}/>
        
        </div>
    </div>
  )
}

export default page