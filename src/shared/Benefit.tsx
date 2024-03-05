import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage}: Props) => {
  return (
    <div className="mt-5 rounded-md border-2 border-cream-50 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-cream-100 bg-cream-20 p-4">
                {icon}
            </div>
        </div>

        <h4 className="font-bold">
            {title}
        </h4>
        <p className="my-3">
            {description}
        </p>
        <AnchorLink
              className="text-sm font-bold text-primary-300 underline hover:no-underline cursor-pointer"
              onClick={() => setSelectedPage(SelectedPage.Contacts)}
              href={`#${SelectedPage.Contacts}`}
            >
              Learn More
            </AnchorLink>
    </div>
  )
};

export default Benefit;
