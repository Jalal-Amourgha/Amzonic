const PageSection = ({ name }) => {
  return (
    <div className="container">
      <div className="mt-[80px] mb-[40px]">
        <p className="text-xl font-medium text-[#9a9a9a]">
          Home <span className="mx-2">/</span>{" "}
          <span className="text-black">{name}</span>
        </p>
      </div>
    </div>
  );
};

export default PageSection;
