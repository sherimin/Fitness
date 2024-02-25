import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "")

    // console.log(selectedPage)

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage === lowerCasePage} ? "font-bold text-primary-300": "text-primary-100" transition duration-500 hover:text-primary-500 hover:font-bold`}
    >
        {page}

    </AnchorLink>
  )
}

export default Link;