import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-primary-100 text-cream-50 px-10 py-2 hover:bg-primary-300 hover:cream-20"
      onClick={() => setSelectedPage(SelectedPage.Contacts)}
      href="#contacts"
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton