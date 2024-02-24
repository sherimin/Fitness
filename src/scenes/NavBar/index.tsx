import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const NavBar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";

  return (
    <nav>
        <div 
          className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            About us

        </div>

    </nav>
  )
}

export default NavBar