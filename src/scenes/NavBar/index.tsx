// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
// import Logo from "@/assets/Logo.png"

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";

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
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar