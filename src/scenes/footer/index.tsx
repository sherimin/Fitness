import Logo from "@/assets/Logo.png";
import GitHubIcon from "@/assets/github.png";
import LinkedInIcon from "@/assets/linkedin.png";
import EmailIcon from "@/assets/email.png";

const Footer = () => {
  return (
    <section className="bg-primary-100 md:flex justify-between text-cream-20 xxs:py-2 xxs: text-base xs:py-2 xs:text-xs sm:py-8 sm:text-sm md:pb-0">
      <div className="justify-content mx-auto w-5/6 gap-5 md:flex">
        <div className="mt-5 basis-1/2 md:mt-0">
          <img src={Logo} className="h-20 w-auto" />
          <p className="md:mt-5 xs:mt-3">
            With a focus on accountability, motivation, and results, iCoach
            Fitness Hub is not just a gym; it's a supportive community where
            members are inspired to thrive and transform their lives.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="basis-1/4 xxs:my-5 xs:my-5 sm:my-5 md:my-6 flex-col">
          <h4 className="font-bold md:mt-10">Contact Us</h4>
          <p className="md:mt-4 sm:mt-8 xs:mt-4 xxs:mt-2">(123)456-7890</p>
          <p className="md:mt-6 sm:mt-8 xs:mt-4 xxs:mt-2">123 Fitness Avenue, Cityville</p>
        </div>

        {/* Developer Info Section */}
        <div className="basis-1/4 xxs:my-5 xs:my-5 sm:my-5 md:my-16">
          <h4 className="font-bold">
            Built with ❤️ By{"  "}
            <a
              href="https://www.sherilu.com"
              className="underline hover:no-underline mt-16 font-bold"
            >
              Sheri Lu
            </a>
          </h4>

          <div className="flex">
            <p className="mt-5 mr-5 xxs:mr-3 xs:mt-4 xs:mr-3 sm:mr-3">
              <a href="https://github.com/sherimin/Fitness">
                <img
                  src={GitHubIcon}
                  alt="GitHub-Link"
                  className="md:h-10 w-auto xs:h-7 xxs:h-7"
                />
              </a>
            </p>
            <p className="mt-5 mx-5  xxs:mx-3 xs:mt-4 xs:mx-3 sm:mx-3">
              <a href="https://www.linkedin.com/in/sherilu/">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn-Link"
                  className="md:h-10 w-auto xs:h-7 xxs:h-7"
                />
              </a>
            </p>

            <p className="mt-5 mx-5 xxs:mt-4 xxs:mx-3 xs:mt-4 xs:mx-3 sm:mx-3">
              <a href="mailto:sherisherilu@gmail.com">
                <img src={EmailIcon} alt="Email-Link" className="md:h-10 w-auto xxs:h-7 xs:h-7" />
              </a>
            </p>
          </div>

          <p className="mt-8 xxs:my-4 xs:my-4 md:py-1">{new Date().getFullYear()} &copy; All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
