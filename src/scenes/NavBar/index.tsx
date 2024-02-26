import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
// import Logo from "@/assets/Logo.png"

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
        <div 
          className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Top-Left */}
                    {/* <img alt="logo" src={Logo} /> */}
                    LOGO

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
                            <p>Sign In</p>

                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
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
            <div className="fixed right-0 botton-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* Close Icon */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="text-cream-100 h-6 w-6" />
                    </button>
                </div>

                {/* Menu Links */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
  )
}

export default NavBar