import Link from "next/link"
import CardDetails from "./CardDetails"
import { Recycle } from "lucide-react"


const Content = () => {
   return (
      <div className='flex justify-center items-center bg-emerald-50 mt-5 flex-col'>
         <div className='flex flex-col justify-center gap-4 mt-20 sm:mt-36 w-full'>
            <p className=' text-4xl sm:text-7xl text-center font-bold'>Welcome to <span className="text-6xl sm:text-7xl font-extrabold text-emerald-600">WasteConnect</span></p>
            <p className='text-6xl sm:text-7xl text-center text-emerald-600  font-bold'>Connect Seamlessly</p>
            <div className='mt-3 flex flex-col p-4 '>
               <p className='text-xl sm:text-3xl text-center text-gray-600 mb-3'> Connecting communities for a cleaner tomorrow. Schedule waste pickups,<br /><br/>
                  find collectors, and contribute to a sustainable environment.</p>
            </div>
         </div>
         <div className='mt-5 sm:mt-12 flex sm:justify-between gap-5 flex-col sm:flex-row'>
            <Link href={'/SignUp'}>
               <div className='bg-emerald-400 flex text-amber-50 w-96 sm:w-56 sm:text-2xl sm:h-14 justify-center h-10 items-center text-xl rounded-md hover:bg-green-900'>
                   Get Started Free</div>
            </Link>
            <Link href={'/SignIn'}>
               <div className='bg-emerald-400 hover:bg-green-900 sm:w-56 sm:h-14 sm:text-2xl  flex text-blue-50 font-se w-full justify-center h-10 items-center text-xl rounded-md font-semibold'> 
                  Sign In</div>
            </Link>
         </div>
         <div>
            <CardDetails />
         </div>
      </div>
   )
}

export default Content