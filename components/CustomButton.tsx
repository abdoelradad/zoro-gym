const CustomButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button
      aria-label="Name"
      className={`${containerStyles} group relative cursor-pointer overflow-hidden  bg-accent`}
    >
      <span className=" ease absolute top-1/2 left-12 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
      <span className="ease relative text-white transition duration-300 text-xl group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
