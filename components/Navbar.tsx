import Link from 'next/link'
import Image from 'next/image'
import Gitlogo from '../public/githublogo.svg'
import LinkedinLogo from '../public/linkedinlogo.svg'
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/outline'


const Navbar = () => {

  return (
    <div >
    <div className="text-[#9C9C9C] text-sm flex justify-around mx-20 py-6 px-10 bg-[#1B1B1B] rounded-md lg:px-20">
        <Link href='/about' className={`hovercode`}>About</Link>
        <Link href='/casestudies' className='hovercode'>Case Studies</Link>
        <Link href='/recentwork' className='hovercode'>Recent Work</Link>
        <Link href='/blog' className='hovercode'>Blog</Link>
        <Link href='/getintouch' className='hovercode'>Get In Touch</Link>
        <div className='flex'>
          <a href='https://github.com/daniel-akinyemi' target='_blank'>
          <Image
          src={Gitlogo}
          alt='Github Logo'
          className='mx-3 w-5 h-5 text-white bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100'
          /></a>
          <a href='https://www.linkedin.com/in/danielakinyemi/' target='_blank'>
          <Image
          src={LinkedinLogo}
          alt='Github Logo'
          className='mx-3 w-5 h-5 text-[#d4d4d4] bg-[#9c9c9c] rounded-sm hover:bg-white/90 transition-all delay-100'
          /></a>
          <a href='https://drive.google.com/uc?id=1x8U1ILw4Aavm6TGygIHmALkhb6QeNkvy&export=download'><ArrowDownOnSquareStackIcon className='mx-3 w-5 h-5 text-[#9c9c9c] hovercode'/></a>
        {/* <img src={Gitlogo} className='mx-2 w-7 h-7 text-[#d4d4d4] rounded-sm'/>
        <img src={LinkedinLogo} className='mx-2 w-7 h-7 text-[#9C9C9C] rounded-sm'/>
        <img src={LinkedinLogo} className='mx-2 w-7 h-7 text-[#9C9C9C] rounded-sm'/> */}

   </div>
    </div>
    
   </div>
  )
}

export default Navbar