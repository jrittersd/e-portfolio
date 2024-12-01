import Container from "react-bootstrap/Container";

type pageHeaderProps = {
  text: string;
};

const headerStyle = {
  background: "#e2e7ef" as const,
  borderRadius: "20px" as const,
  paddingTop: "1em" as const,
  paddingBottom: "1em" as const,
  paddingRight: "1em" as const,
  paddingLeft: "2em" as const,
  marginBottom: "1em" as const,
  boxShadow: "3px 3px lightgray" as const,
  //overflow
  overflowX: "hidden" as const,
  overflowY: "hidden" as const,
  fontSize: "1.3em" as const,
  whiteSpace: "pre-wrap" as const,
  wordWrap: "break-word" as const,
  overflowWrap: "break-word" as const,
  wordBreak: "break-word" as const,
  lineHeight: "1.8" as const,
  hyphens: "auto" as const,
};

const textStyle = {
  width: "100%" as const,
  textAlign: "left" as const,
  marginBottom: "-0.25em",
};
export default function AboutMe(props: pageHeaderProps) {
  return (
    <Container fluid>
      <div style={headerStyle}>
        <h1 className="display-4" style={textStyle}>
          About Me
        </h1>
        {props.text}
      </div>
    </Container>
  );
}
