import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 2, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block ">
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />
      </div>
    </div>
  );
};

export default AboutCounter;
