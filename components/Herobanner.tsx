import { ArrowLongRightIcon} from '@heroicons/react/24/outline'

const Herobanner = () => {
  return (
    <div className=''>
        <div className="text-[#9C9C9C] top-10 max-w-xl md:pt-32">
          <h1 className="font-bold text-4xl text-white">Daniel Akinyemi</h1>
          {/* <p className='mt-4'>Javascript & Typescript developer with 5 years of experience building webapps</p> */}
          <p className='mt-4'>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href='https://souqify.com' className='underline text-gray-350'>Souqify</a>.
          </p>
          <button className='mt-6 flex items-center px-8 py-3  bg-white text-gray-700 rounded-sm font-bold'>Lets Get Started </button>
          
        </div>
    </div>
  )
}

export default Herobanner