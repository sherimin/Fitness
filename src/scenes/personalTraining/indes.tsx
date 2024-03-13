import { SelectedPage } from "@/shared/types";
import image01 from "@/assets/image01.jpg";
import image02 from "@/assets/image02.jpg";
import image03 from "@/assets/image05.jpg";
import image04 from "@/assets/image06.jpg";
import image05 from "@/assets/image08.jpg";
import image06 from "@/assets/image09.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { TrainingsType } from "@/shared/types";
import Trainings from "./Trainings";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const trainings: Array<TrainingsType> = [
  {
    name: "Onsite Facilities",
    description:
      "Our onsite facilities not only boast high-tech equipment but also offer immersive experiences such as virtual reality workouts, ensuring a dynamic and engaging fitness environment.",
    image: image01,
  },
  {
    name: "Modern CrossFit Training",
    image: image02,
  },
  {
    name: "Group Classes",
    image: image03,
  },
  {
    name: "Remote Sessions At Home",
    description:
      "Transform your living room into a fitness studio with our remote sessions on TV, providing a cinematic fitness experience with crystal-clear instructions and real-time feedback to keep you on track.",
    image: image04,
  },
  {
    name: "Remote Sessions While Traveling",
    description:
      "tay connected to your fitness goals no matter where you are with our remote sessions on laptop, offering flexibility and convenience without compromising the quality of personalized coaching and support.",
    image: image05,
  },
  {
    name: "Personalized Nutritionist",
    description:
      "Our team of dedicated nutritionists goes beyond meal planning, providing ongoing support, accountability, and education to empower you to make sustainable lifestyle changes that fuel your body for peak performance.",
    image: image06,
  },
];

const PersonalTraining = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="personaltraining"
      className="w-full bg-primary-100 pt-24 pb-28 text-cream-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.PersonalTraining)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Personalized Training</HText>
            <p className="my-5">
              Beyond just one-on-one training sessions, we provide remote
              personalized training programs allowing you to access expert
              guidance and support{" "}
              <span className="text-cream-500 font-semibold">
                {" "}
                from anywhere, anytime
              </span>
              . Whether you prefer in-person sessions or remote coaching, our
              goal remains the same: to empower you with the tools, knowledge,
              and support you need to optimize your health and wellness
              effectively and sustainably.
            </p>
          </div>
        </motion.div>
        {/* Y-Scroll */}
        <div className="h-[353px] w-full overflow-x-auto overflow-y-hidden mt-16">
          <ul className="w-[2800px] whitespace-nowrap">
            {trainings.map((item: TrainingsType, index) => (
              <Trainings
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalTraining;
