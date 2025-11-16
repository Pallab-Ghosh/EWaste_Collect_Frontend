 import FeatureCard from './FeatureCard';
import MoreContent from './MoreContent';
import UserStatus from './UserStatus';
import { ShieldCheck , UsersRound , Sprout  } from "lucide-react";

const CardDetails = () => {
  const features = [
    {
      Icon: Sprout ,
      title: "Eco-Friendly",
      description: "Reduce waste and contribute to a cleaner environment through efficient waste management.",
    },
    {
      Icon: UsersRound ,
      title: "Community-Driven",
      description: "Connect residents with verified collectors in your local community for seamless pickups.",
    },
    {
      Icon: ShieldCheck ,
      title: "Easy Tracking",
      description: "rack your pickup requests in real-time with status updates from pending to completed.",
    }
  ];

  return (
    <div className="mt-10 flex flex-col gap-5 sm:mt-40">
      <div className="flex flex-col justify-center items-center font-bold sm:flex-row sm:gap-1 sm:text-xl">
        <p className="text-4xl">Recycle smarter, live cleaner – manage your e-waste with ease!</p>
      </div>
      <div className="sm:flex justify-center sm:text-xl mb-8">
        <p className="text-center">Turn old electronics into a greener tomorrow, </p>
        <p className="text-center">one click at a time!</p>
      </div>

      <div className="flex flex-col items-center gap-7 sm:gap-16 sm:flex-row sm:justify-center mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            Icon={feature.Icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

{/*       <UserStatus /> */}
      <MoreContent />
    </div>
  );
}

export default CardDetails;
