import DownloadButton from "../components/downloadBtn";
import ListBox from "../components/listBox";
type jobExpTypes = {
  jobs: Array<{
    position: string;
    company: string;
    start: string;
    end: string;
    description: Array<string>;
    skills: string;
  }>;
  outerBackground: string;
  downloadUrl: string;
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
};

export default function ExperienceContainer(props: jobExpTypes) {
  return (
    <>
      <div
        style={{
          ...divStyle,
          background: props.outerBackground,
          boxShadow: "3px 3px lightgray" as const,
        }}
      >
        <div style={{ ...divStyle, marginBottom: "2em" }}>
          <div style={{ float: "left" as const }}>
            <h1 className="display-5" style={{ marginBottom: ".5em" as const }}>
              Experience
            </h1>
          </div>
          <div style={{ float: "right" as const }}>
            <DownloadButton
              downloadUrl={props.downloadUrl}
              btnText="DOWNLOAD"
            />
          </div>
        </div>
        <br></br>
        <div>
          {props.jobs.map((job) => {
            return (
              <>
                <div
                  style={{
                    ...divStyle,
                    background: innerBoxColor,
                  }}
                >
                  <h3 className="display-6">{job.position}</h3>
                  <h3 className="display-7">{job.company}</h3>
                  <p
                    style={{ fontSize: "1.25em" as const }}
                  >{`${job.start} - ${job.end}`}</p>
                  <ListBox list={job.description} />
                  <p>
                    <b>Key Skills: </b>
                    {job.skills}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
