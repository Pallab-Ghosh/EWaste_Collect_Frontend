
import { Card, CardDescription, CardFooter } from "@/components/ui/card"
import { MessageCircle, Share2, Upload } from "lucide-react"



const FeatureCard = ({ Icon, title, description }) => {
  return (
    <Card className="bg-green-100 w-96 sm:w-sm rounded-lg shadow-xl">
      <CardDescription className="flex justify-center flex-col items-center gap-8 text-xl font-bold text-black">
        {Icon && <Icon size={50} color="green" />}
        <p className="sm:text-2xl">{title}</p>
      </CardDescription>
      <CardFooter className="flex flex-col sm:text-xl text-center">
        <p>{description}</p>
      </CardFooter>
    </Card>
  )
}

export default FeatureCard
