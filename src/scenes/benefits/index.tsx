import Benefit from "@/shared/Benefit";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  BuildingStorefrontIcon,
  UserGroupIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Personalized Coaching",
    description:
      "We take a holistic approach to your fitness journey, providing guidance not only in workouts but also in lifestyle adjustments, ensuring sustainable, progressive and long-term success."
  },
  {
    icon: <GlobeAmericasIcon className="h-6 w-6" />,
    title: "Remote Accessibility",
    description:
      "With our remote coaching feature, you can access expert guidance and support from the comfort of your own home or while traveling, ensuring consistent progress no matter where you are.",
  },
  {
    icon: <BuildingStorefrontIcon className="h-6 w-6" />,
    title: "Nutrition Guidance",
    description:
      "Our platform offers personalized nutrition advice to optimize your overall health and wellness, ensuring a comprehensive approach to reach your fitness goals.",
  },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 text-primary-300">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <HText>revolutionize your fitness journey.</HText>
          <p className="my-5 text-sm">
            At <text className="font-semibold">iCoach Fitness Hub</text>, we
            blend cutting-edge technology with personalized coaching to help you
            achieve your goals. With a focus on holistic health and
            individualized programming,{" "}
            <text className="font-semibold">iCoach Fitness Hub</text> is not
            just a gym; it's your partner in transformation.
          </p>
        </div>

        {/* Benefits */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
