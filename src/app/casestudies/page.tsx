'use client'
import ProjectCard from "../../../components/ProjectCard";
import octaneHero from "../../../public/octanehero.png";
import chatgptclonehomepage from "../../../public/chatgptclonehomepage.png";
import googleclonehomepage from '../../../public/googleclonehomepage.png'
import defilandingpage from '../../../public/defilandingpage.png'
import graft3r from '../../../public/graft3r.png'
import {motion, AnimatePresence} from 'framer-motion'


const page = () => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
      initial={{y:25, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{
        duration:1.25,
      }}
      
      >
    <div className="scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-slate-700 mx-auto">
      <div className="max-w-5xl mx-auto py-20 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      
        <ProjectCard
          projectName="Octane Portfolio OS"
          projectSummary="Modern developer portfolio website"
          techCard1="React"
          techCard2="Tailwind CSS"
          techCard3="Javascript"
          projectLink="https://danielakinyemi.vercel/app/casestudies"
          backgroundImage={`${octaneHero.src}`}
        />
        <ProjectCard
          projectName="Graft3r"
          projectSummary="Streetwear Fashion"
          techCard1="Liquid"
          techCard2="Javascript"
          techCard3="CSS/SCSS"
          projectLink="https://graft3r.co.uk"
          backgroundImage={`${graft3r.src}`}
        />
        <ProjectCard
          projectName="Chat GPT Clone 1.1"
          projectSummary="I created a clone of the popular AI chatbot"
          techCard1="NextJS"
          techCard2="Tailwind CSS"
          techCard3="Vercel"
          projectLink="https://chat-gpt-clone-1-1-git-main-daniel-akinyemi.vercel.app/"
          backgroundImage={`${chatgptclonehomepage.src}`}
        />
        <ProjectCard
          projectName="De-Fi Trading WebApp"
          projectSummary="Landing Page for a De-Fi trading firm"
          techCard1="React"
          techCard2="Tailwind CSS"
          techCard3="Vercel"
          projectLink="https://vercel.com/daniel-akinyemi/defi-app/8684BGCemS4pfaeNp5AGbGFnM4dN"
          backgroundImage={`${defilandingpage.src}`}
        />
        <ProjectCard
          projectName="Google Clone 2.0"
          projectSummary="modern clone of Google search with React Js"
          techCard1="Next.JS"
          techCard2="Tailwind"
          techCard3="Vercel"
          projectLink="https://google-clone-version-2-git-main-daniel-akinyemi.vercel.app/"
          backgroundImage={`${googleclonehomepage.src}`}
        />
        <ProjectCard
          projectName="Prisma Shopify Theme"
          projectSummary="I created a clone of the popular AI chatbot"
          techCard1="Liquid"
          techCard2="Javascript"
          techCard3="CSS/SCSS"
          projectLink="https://github.com/daniel-akinyemi/prisma-shopify-theme-1.0.1"
          backgroundImage={`${octaneHero.src}`}
        />
        
      </div>
    </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default page;
