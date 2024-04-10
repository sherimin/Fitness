import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/Logo.png";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-40 w-full h-[10%] min-h-16 max-h-24 py-0 rounded-bl-[10%] rounded-br-[10%]`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Top-Left */}
            <img alt="logo" src={Logo} className="h-28 w-auto" />
            {/* Top-Right */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* NavBar Links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Personal Training"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contacts"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                {/* Sign In and Become a Member */}
                <div className={`${flexBetween} gap-8`}>
                  <p></p>

                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              // Mobile Screen
              <button
                className="rounded-full bg-secondary-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-cream-20" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 botton-0 z-40 h-full w-[260px] bg-primary-100 drop-shadow-xl rounded-tl-3xl rounded-bl-3xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="text-cream-100 h-6 w-6 hover:opacity-60" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="ml-[33%] mr-[10%] flex flex-col gap-10 text-2xl xxs:gap-4 xxs:text-lg xs:gap-6 xs:text-xl xxs:text-cream-500">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Personal Training"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
