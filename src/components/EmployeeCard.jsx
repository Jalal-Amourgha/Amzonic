const EmployeeCard = ({ img, name, job, socials }) => {
  return (
    <div>
      <div>
        <img src={img} className="w-full rounded-md" />
      </div>
      <h1 className="mt-5 text-3xl font-medium">{name}</h1>
      <p>{job}</p>
      <div className="mt-5 ">
        {socials.map((social, index) => (
          <i key={index} className={`${social.icon} text-[20px] mr-5`}></i>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCard;
