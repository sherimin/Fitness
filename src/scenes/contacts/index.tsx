import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactsGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contacts = ({ setSelectedPage }: Props) => {

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();

        if (!isValid) {
            e.preventDefault();
        }

    }

  return (
    <section
      id="contacts"
      className="bg-cream-20 text-primary-300 mx-auto w-full pt-24 pb-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contacts)}
        className="w-5/6 mx-auto"
      >
        {/* Header */}
        <motion.div
          className="mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>
            <span className="text-cream-500">Get closer</span> to your goals.
          </HText>
          <p className="mx-auto my-5">
            (A Message from the web developer: 👋 Hey there! Thank you for taking the time to visit my web application. As the developer behind this website, I'm passionate about creating platforms to empower
            individuals and companies to promote their profiles and businesses.
            If you have any questions, suggestions or simply want to connect, please don't hesitate to use the form below to reach out. Thank you!
            ❤️)
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-10 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form 
              className="flex flex-col gap-5 md:w-full mx-20 xs:11/12 xs:mx-5 text-cream-20"
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
            >
              <input
                className="bg-primary-100 h-[45px] rounded-lg p-5"
                placeholder="Your Name"
              />
              <input
                className="bg-primary-100 h-[45px] rounded-lg p-5"
                placeholder="Your Email"
              />
              <textarea
                className="bg-primary-100 h-[300px] rounded-lg p-5"
                placeholder="Message"
              />
            </form>
          </motion.div>

          <img
            src={ContactsGraphic}
            alt="ContactsGraphic"
            className="w-auto h-5/6 rounded-xl xs:my-20 md:my-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
