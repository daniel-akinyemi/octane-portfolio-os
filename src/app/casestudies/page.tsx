import ProjectCard from "../../../components/ProjectCard"
import octaneHero from '../../../public/octanehero.png'
import chatgptclonehomepage from '../../../public/chatgptclonehomepage.png'
import souqifyhomepage from '../../../public/souqify-homepage.png'


const page = () => {
  return (
    <div className="scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-slate-700 mx-auto">
      <div className="max-w-5xl mx-auto py-20 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
            <ProjectCard projectName="Octane Portfolio OS" projectSummary="Modern developer portfolio website" techCard1="React" techCard2="Tailwind CSS" techCard3="Javascript" projectLink="https://danielakinyemi.vercel/app/casestudies" backgroundImage={`${octaneHero.src}`}/>
            <ProjectCard projectName="Souqify" projectSummary="Your plug for house finishing products" techCard1="Liquid" techCard2="Javascript" techCard3="CSS/SCSS" projectLink="https://souqify.com" backgroundImage={`${souqifyhomepage.src}`}/>
            <ProjectCard projectName="Chat GPT Clone 1.1" projectSummary="I created a clone of the popular AI chatbot" techCard1="NextJS" techCard2="Tailwind CSS" techCard3="Vercel" projectLink="https://chat-gpt-clone-1-1-git-main-daniel-akinyemi.vercel.app/" backgroundImage={`${chatgptclonehomepage.src}`}/>
            <ProjectCard projectName="De-Fi Trading WebApp" projectSummary="Landing Page for a De-Fi trading firm" techCard1="React" techCard2="Tailwind CSS" techCard3="Vercel" projectLink="https://danielakinyemi.vercel/app/casestudies" backgroundImage={`${octaneHero.src}`}/>
            <ProjectCard projectName="Google Clone 2.0" projectSummary="modern clone of Google search with React Js" techCard1="Next.JS" techCard2="Tailwind" techCard3="Vercel" projectLink="https://danielakinyemi.vercel/app/casestudies" backgroundImage={`${octaneHero.src}`}/>
            <ProjectCard projectName="Prisma Shopify Theme" projectSummary="I created a clone of the popular AI chatbot" techCard1="Liquid" techCard2="Javascript" techCard3="CSS/SCSS" projectLink="https://danielakinyemi.vercel/app/casestudies" backgroundImage={`${octaneHero.src}`}/>
        
        </div>
    </div>
  )
}

export default page