import Logo from "@/assets/Logo.png";
import GitHubIcon from "@/assets/github.png";
import LinkedInIcon from "@/assets/linkedin.png";
import EmailIcon from "@/assets/email.png";

const Footer = () => {
  return (
    <section className="bg-primary-100 md:flex justify-between sm:py-8 text-cream-20 xs:py-2 xs:text-xs sm:text-sm">
      <div className="justify-content mx-auto w-5/6 gap-5 md:flex">
        <div className="mt-5 basis-1/2 md:mt-0">
          <img src={Logo} className="h-20 w-auto" />
          <p className="my-3">
            With a focus on accountability, motivation, and results, iCoach
            Fitness Hub is not just a gym; it's a supportive community where
            members are inspired to thrive and transform their lives.
          </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0 flex-col">
          <h4 className="font-bold mt-10">Contact Us</h4>

          <p className="mt-10">(123)456-7890</p>

          <p className="mt-5">123 Fitness Avenue, Cityville</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="mt-10">
            Built with ❤️ By{" "}
            <a
              href="https://www.sherilu.com"
              className="underline hover:no-underline mt-16"
            >
              Sheri Lu
            </a>
          </h4>

          <div className="flex">
            <p className="mt-5 mr-5">
              <a href="https://github.com/sherimin/Fitness">
                <img
                  src={GitHubIcon}
                  alt="GitHub-Link"
                  className="h-10 w-auto"
                />
              </a>
            </p>
            <p className="mt-5 mx-5">
              <a href="https://www.linkedin.com/in/sherilu/">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn-Link"
                  className="h-10 w-auto"
                />
              </a>
            </p>

            <p className="mt-5 mx-5">
              <a href="mailto:sherisherilu@gmail.com">
                <img src={EmailIcon} alt="Email-Link" className="h-10 w-auto" />
              </a>
            </p>
          </div>
          <p className="mt-5">2024 © All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
