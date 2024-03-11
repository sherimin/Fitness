import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactsGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contacts = ({ setSelectedPage }: Props) => {
    const inputStyles = `bg-primary-100 rounded-lg px-5 py-3 placeholder-cream-100 w-full`;

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
          <p className="my-5">
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
              className="flex flex-col gap-5 md:w-full mr-20 xs:w-11/12 xs:mx-5 md:mx-0 text-cream-20"
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/sherisherilu@gmail.com"
            >
              <input
                className={inputStyles}
                placeholder="YOUR NAME"
                type="text"
                {...register("name", {
                    required: true,
                    maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-secondary-400">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 100 characters."}
                </p>
              )}

              <input
                className={inputStyles}
                placeholder="YOUR EMAIL"
                type="email"
                {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-secondary-400">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={6}
                cols={50}
                {...register("message", {
                    required: true,
                    maxLength: 5000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-secondary-400">
                    {errors.message.type === "required" && "This field is required."}
                    {errors.message.type === "maxLength" && "Max length is 5000 characters."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 w-1/3 rounded-lg bg-secondary-400 px-20 py-3 transition duration-200 hover:bg-primary-300"
              >
                Submit
              </button>

              
            </form>
          </motion.div>

          <motion.div 
            className="relative mt-0 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-20 md:before:content-icoachtext before:z-[-1]">
              <img
                src={ContactsGraphic}
                alt="ContactsGraphic"
                className="w-full h-5/6 rounded-xl xs:my-20 md:my-0"
              />
            </div>
          </motion.div>

          
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
