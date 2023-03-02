type Props = {
  title: string;
  description: string;
  image: string;
};

const Class = ({ title, description, image }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[353px] w-[450px]">
      <div className="p-5 absolute z-30 flex flex-col h-[338px] w-[450px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
        <p className="text-2xl">{title}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default Class;
