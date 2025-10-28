const Programming = () => {
  const ProgrammingSkills3 = [
    {
      name: "Java",
      icon: "bx bxl-java skills_icon",
    },
    {
      name: "Python",
      icon: "bx bxl-python skills_icon",
    },

   
  ];
  const ProgrammingSkills6 = [
    {
      name: "Javascript",

      icon: "bx bxl-javascript skills_icon",
    },
     {
      name: " C",
      icon: "devicon-c-plain colored skills_icon",
    },

    // {
    //   name: "NextJS",
    //   icon: "bx bxl-nextjs skills_icon",
    // },

    // {
    //   name: "tailwind",
    //   icon: "bx bxl-tailwind-css skills_icon",
    // },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Programming Languages</h3>
      <div className="skills__box">
        <div className="skills__group">
          {ProgrammingSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {ProgrammingSkills6.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programming;
