import Benefit from "@/shared/Benefit";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  BuildingStorefrontIcon,
  UserGroupIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitGraph from "@/assets/BenefitsGraphic.png";
import ActionButton from "@/shared/ActionButton";

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
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
          <HText>
            <span className="text-cream-500">revolutionize</span>
            {" "}your fitness journey.
          </HText>
          <p className="my-5 text-sm">
            At <text className="font-semibold">iCoach Fitness Hub</text>, we
            blend cutting-edge technology with personalized coaching to help you
            achieve your goals. With a focus on holistic health and
            individualized programming,{" "}
            <text className="font-semibold">iCoach Fitness Hub</text> is not
            just a gym; it's your partner in transformation.
          </p>
        </motion.div>

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

        {/* Graphic and More Benefits Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* Graphic */}
            <img 
              className="mx-auto h-[36rem] w-auto"
              alt="BenefitsGraphic"
              src={BenefitGraph}
            />

            {/* Description */}
            <div>
                {/* Title */}
                <div className="relative">
                    <div 
                      className="before:absolute before:-top-64 before:-left-20 before:z-[-1] before:content-blockarrows before:max-h-2 before:max-w-2"
                    >
                        <div>
                            <HText>
                              we{" "}
                              <span className="text-cream-500">redefine</span> 
                              {" "}your wellness experience.
                            </HText>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <p className="my-5">
                        At iCoach Fitness Hub, our mission is simple: to deliver results. Our team of experienced coaches takes the time to understand your unique needs, goals, and challenges, crafting customized workout plans and providing expert guidance every step of the way. 
                    </p>

                    <p className="my-5">
                        With a track record of success stories and a commitment to excellence, iCoach Fitness Hub is the ultimate destination for those seeking real, lasting results in their fitness journey.
                    </p>
                </div>

                {/* Button */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-top-20 before:-right-24 before:z-[-1] before:content-heartline before:h-3">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            JOIN US
                        </ActionButton>

                    </div>
                </div>
            </div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default Benefits;
