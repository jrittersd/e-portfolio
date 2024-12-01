type skillsTypes = {
  skills: Array<{
    name: string;
    proficiency: string;
  }>;
};

const divStyle = {
  background: "#f3e2dd" as const,
  // background: "#fff5de" as const,
  borderRadius: "20px" as const,
  paddingTop: "1em" as const,
  paddingBottom: "1em" as const,
  paddingRight: "1em" as const,
  paddingLeft: "2em" as const,
  marginBottom: "1em" as const,
};

const innerBoxColor = "#efefef" as const;
export default function SkillsContainer(props: skillsTypes) {
  return (
    <>
      <div style={{ ...divStyle, boxShadow: "3px 3px lightgray" as const }}>
        <h1 className="display-5" style={{ marginBottom: ".5em" as const }}>
          Technical Skills
        </h1>
        {props.skills.map((skill) => {
          return (
            <>
              <div
                style={{
                  ...divStyle,
                  background: innerBoxColor,
                }}
              >
                <h3
                  className="display-6"
                  style={{ fontSize: "1.9em" as const }}
                >
                  {skill.name}
                </h3>
                <h3
                  className="display-6"
                  style={{ fontSize: "1.4em" as const }}
                >
                  {skill.proficiency}
                </h3>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
