type eduExpTypes = {
  schools: Array<{
    degree: string;
    university: string;
    start: string;
    end: string;
    classes: string;
  }>;
  outerBackground: string;
};

const innerBoxColor = "#efefef" as const;

const divStyle = {
  background: "",
  borderRadius: "20px" as const,
  paddingTop: "1em" as const,
  paddingBottom: "1em" as const,
  paddingRight: "1em" as const,
  paddingLeft: "2em" as const,
  marginBottom: "1em" as const,
  boxShadow: "3px 3px lightgray" as const,
};
export default function EducationContainer(props: eduExpTypes) {
  return (
    <>
      <div
        style={{
          ...divStyle,
          background: props.outerBackground,
        }}
      >
        <h1 className="display-5" style={{ marginBottom: ".5em" as const }}>
          Education
        </h1>
        {props.schools.map((school) => {
          return (
            <>
              <div
                style={{
                  ...divStyle,
                  background: innerBoxColor,
                }}
              >
                <h3 className="display-6">{school.degree}</h3>
                <h3 className="display-7">{school.university}</h3>
                <p
                  style={{ fontSize: "1.25em" as const }}
                >{`${school.start} - ${school.end}`}</p>
                <p>
                  <b>Relevant Coursework: </b>
                  {school.classes}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
