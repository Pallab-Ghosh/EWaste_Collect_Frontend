'use client'

import { useRouter } from "next/navigation"


const HomeBtn = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center mt-10">
      <button
        className="h-12 bg-white w-52 rounded-lg text-black sm:text-2xl sm:w-72 "
        onClick={() => router.push('/SignUp')}//TODO[:as of now go to home page later go on dashboard page]
      >
        Create your Account
      </button>
    </div>
  )
}

export default HomeBtn
