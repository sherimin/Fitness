type Props = {
  name: string;
  description?: string;
  image: string;
};

const Trainings = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[300px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-300 text-center opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative inline-block h-[300px] mx-5 w-[450px]">
      {/* Text Overlay */}
      <div className={overlayStyles}>
        <p className="font-semibold text-lg">{name}</p>
        <p className="mt-5 text-base">{description}</p>
      </div>
      <img alt={`${image}`} src={`${image}`} />
    </li>
  );
};

export default Trainings;
