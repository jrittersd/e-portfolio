//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//Components
import TextBox from "../components/textBox";
import BoxComponent from "../components/box";
import DownloadButton from "../components/downloadBtn";

//Types
type blurbContainerProps = {
  outerBackground?: string;
  innerBackground?: string;
  outerDimensions?: {
    height: string;
    width: string;
  };
  text: string;
  title?: string;
  downloadUrl?: string;
  btnText?: string;
};
//Defaults
const defaultDimensions = { height: "100%" as const, width: "100%" as const };

export default function TextBoxContainer(props: blurbContainerProps) {
  const dimensions = props.outerDimensions
    ? props.outerDimensions
    : defaultDimensions;

  if (props.downloadUrl) {
    const rowStyle = {
      // marginTop: ".5em" as const,
      paddingRight: "1em" as const,
      minHeight: "max-content" as const,
      // marginTop: "-1em",
      // marginLeft: "-1em",
    };

    const divStyle = {
      minHeight: "max-content" as const,
    };
    return (
      <>
        <BoxComponent
          background={props.outerBackground ? props.outerBackground : "inherit"}
          dimensions={dimensions}
          component={
            <>
              <Container fluid>
                <Row style={rowStyle}>
                  {props.title && (
                    <div
                      style={{
                        ...divStyle,
                        float: "left" as const,
                        width: "80%" as const,
                      }}
                    >
                      <h1 className="display-5">{props.title}</h1>
                    </div>
                  )}
                  <div
                    style={{
                      ...divStyle,
                      float: "right" as const,
                      paddingTop: "1em" as const,
                      paddingRight: "1.5em" as const,
                      width: "20%" as const,
                    }}
                  >
                    <DownloadButton
                      downloadUrl={props.downloadUrl}
                      btnText={props.btnText ? props.btnText : "DOWNLOAD"}
                      addStyle={{ float: "right" as const }}
                    />
                  </div>
                </Row>
                <Row>
                  <Container>
                    <TextBox
                      text={props.text}
                      background={
                        props.innerBackground
                          ? props.innerBackground
                          : "inherit"
                      }
                    />
                  </Container>
                </Row>
              </Container>
            </>
          }
        />
      </>
    );
  } else {
    const headerStyle = {
      marginTop: "0.25em" as const,
      width: "100%" as const,
      float: "left" as const,
    };
    return (
      <>
        <BoxComponent
          background={props.outerBackground ? props.outerBackground : "inherit"}
          dimensions={dimensions}
          component={
            <>
              <Container fluid>
                {props.title && (
                  <h3 className="display-5" style={headerStyle}>
                    {props.title}
                  </h3>
                )}
                <TextBox
                  text={props.text}
                  background={
                    props.innerBackground ? props.innerBackground : "inherit"
                  }
                />
              </Container>
            </>
          }
        />
      </>
    );
  }
}
