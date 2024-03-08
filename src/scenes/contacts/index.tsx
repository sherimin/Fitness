import { SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contacts = ({ setSelectedPage }: Props) => {
  return (
    <section id="contacts" className="bg-cream-20">
        Contact

    </section>
  )
}

export default Contacts