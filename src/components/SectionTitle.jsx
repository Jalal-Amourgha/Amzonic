const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center mb-7">
      <span className="h-[35px] w-[15px] bg-main-color block rounded-sm mr-3"></span>
      <h1 className="text-xl text-main-color font-medium">{title}</h1>
    </div>
  );
};

export default SectionTitle;
