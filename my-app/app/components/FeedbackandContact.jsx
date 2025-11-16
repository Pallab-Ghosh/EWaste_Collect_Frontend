
import  DialogContents from './DialogContents'

const FeedbackandContact = () => {
   return (

      <div className="flex mt-5 sm:gap-3 p-1 justify-between sm:mr-5 ml-3 gap-1">
            <div className='bg-green-300 flex text-white font-semibold w-28 sm:w-32 sm:text-xl sm:h-14 justify-center h-8 items-center text-xl rounded-md hover:bg-blue-100 '>
               <DialogContents formprops={{type:"feedback",BtnContent:"Feedback",title:'Give Your Valuable Feedback here', desc:"Share your Feedback.We will try to improve our Application."}}/>
                </div>  
      </div>

   )
}

export default FeedbackandContact
