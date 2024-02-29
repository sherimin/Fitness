import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Nike from "@/assets/Nike.png"
import Lululemon from "@/assets/Lululemon.png"
import Adidas from "@/assets/Adidas.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-cream-20 pb-10 pt-10 md:h-full md:pb-0"
    >
      {/* Image and Header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* Main Header */}
        <div className="z-10 mt-20 md:mt-0 md:basis-3/5">
          {/* Headings */}
          <div className="md:-mt-10">
            <div className="relative">
              <div className="before:absolute before:-top-[9rem] before:-left-20 before:z-[-1] md:before:content-icoachtext">
                <img src={HomePageText} alt="Home-Page-Text" />
              </div>
            </div>

            <p className="text-primary-300 font-playfair -mt-10 text-sm md:text-start">
              At iCoach Fitness Hub, we integrate advanced technology with
              personalized coaching to elevate your fitness journey. We offer
              remote coaching sessions for tailored workouts and personalized
              nutrition advice, empowering you to achieve your goals with expert
              guidance from anywhere.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center gap-8 md:justify-start">
            <ActionButton setSelectedPage={setSelectedPage}>
              JOIN NOW!
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:no-underline cursor-pointer"
              onClick={() => setSelectedPage(SelectedPage.Contacts)}
              href={`#${SelectedPage.Contacts}`}
            >
              Learn More
            </AnchorLink>
          </div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 lg:ml-40 md:mt-16 md:justify-items-end">
          <img alt="Home-Page-Img" src={HomePageGraphic} className="" />
        </div>
      </div>

      {/* Sponsors */}
      {/* Hide sponsor section in small screens */}
      {isAboveMediumScreens && (
        <div className="h-[120px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-around gap-8">
              <img alt="nike-sponsor" src={Nike} className="h-[40px]" /> 
              <img alt="lululemon-sponsor" src={Lululemon} className="h-[40px]" />
              <img alt="Adidas-sponsor" src={Adidas} className="h-[40px]" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
