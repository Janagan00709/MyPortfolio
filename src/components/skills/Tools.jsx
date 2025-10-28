const Tools = () => {
  const ToolsSkills3 = [
    
    {
      name: "Linux",
      icon: "devicon-linux-plain colored skills_icon",
    },
    {
      name: "Docker",
      icon: "bx bxl-docker skills_icon",
    },

   
  ];
  const ToolsSkills6 = [
    {
      name: "Github",

      icon: "bx bxl-github skills_icon",
    },
     {
      name: "Networking",
      icon: "bx bx-server skills_icon",
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
      <h3 className="skills__title">Tools and Technologies</h3>
      <div className="skills__box">
        <div className="skills__group">
          {ToolsSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {ToolsSkills6.map((skill, index) => (
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

export default Tools;
