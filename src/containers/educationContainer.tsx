type eduExpTypes = {
  schools: Array<{
    degree: string;
    university: string;
    start: string;
    end: string;
    classes: string;
  }>;
};

const divStyle = {
  //
  background: "#e8f0e0" as const,
  // background: "#fff5de" as const,
  borderRadius: "20px" as const,
  paddingTop: "1em" as const,
  paddingBottom: "1em" as const,
  paddingRight: "1em" as const,
  paddingLeft: "2em" as const,
  marginBottom: "1em" as const,
};
export default function EducationContainer(props: eduExpTypes) {
  return (
    <>
      <div style={{ ...divStyle, boxShadow: "3px 3px lightgray" as const }}>
        <h1 className="display-4" style={{ marginBottom: ".5em" as const }}>
          Education
        </h1>
        {props.schools.map((school) => {
          return (
            <>
              <div
                style={{
                  ...divStyle,
                  background: "#fff5de",
                  // background: "#f0f2e1",
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
