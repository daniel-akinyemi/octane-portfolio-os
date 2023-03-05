import { ArrowLongRightIcon} from '@heroicons/react/24/outline'

const Herobanner = () => {
  return (
    <div className='relative'>
        <div className="text-[#9C9C9C]  max-w-xl md:pt-32  py-40 px-4 ">
          <h1 className="font-bold text-4xl text-white">Daniel Akinyemi</h1>
          {/* <p className='mt-4'>Javascript & Typescript developer with 5 years of experience building webapps</p> */}
          <p className='my-8'>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href='https://souqify.com' className='underline text-gray-400 hover:text-gray-300 bg-[#1B1B1B] py-0.5 px-2 rounded-sm'>Souqify</a>.
          </p>
          <button className='mt-6 flex items-center px-8 py-3  bg-white text-gray-700 rounded-sm font-bold'>See More About Me &rarr; </button>
          
        </div>
    </div>
  )
}

export default Herobanner