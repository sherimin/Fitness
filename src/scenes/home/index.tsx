import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import HomePageText from "@/assets/HomePageText.png"
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(mid-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-cream-20 pb-10 pt-10 md:h-full md:pb-0"
    >
      {/* Image and Header */}
      <div>
        {/* Main Header */}
        <div>
          {/* Headings */}
          
        <div>

          <div>
            <div>
              <img src={HomePageText} alt="Home-Page-Text" />
            </div>
          </div>

          <p className="text-primary-300 font-playfair">
            At iCoach Fitness Hub, we integrate advanced technology with personalized coaching to elevate your fitness journey. We offer remote coaching sessions for tailored workouts and personalized nutrition advice, empowering you to achieve your goals with expert guidance from anywhere.
          </p>
        </div>

        {/* Actions */}
        <div>
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
        <div>

        </div>
      </div>
    </section>
  );
};

export default Home;
