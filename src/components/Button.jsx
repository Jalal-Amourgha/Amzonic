const Button = ({ label, padding, border }) => {
  return (
    <button
      className={`px-5 py-4 sm:px-5 sm:py-2 ${
        border
          ? "border-[1px] border-black bg-white text-black"
          : "bg-main-color text-white "
      }  rounded-md text-xl`}
    >
      {label}
    </button>
  );
};

export default Button;
