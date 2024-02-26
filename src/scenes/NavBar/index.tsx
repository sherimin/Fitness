import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
// import Logo from "@/assets/Logo.png"

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  return (
    <nav>
        <div 
          className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
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

                            <button>Become a Member</button>
                        </div>
                    </div> 
                    ) : (
                        // Mobile Screen
                        <button
                          className="rounded-full bg-secondary-400 p-2"
                          onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white" />

                        </button>
                    )}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar