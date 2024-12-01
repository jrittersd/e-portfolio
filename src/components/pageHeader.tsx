import Container from "react-bootstrap/Container";
import image from "../assets/usd.png";

type pageHeaderProps = {
  title: string;
  subtitle?: string;
};

const headerStyle = {
  backgroundImage: `url(${image})` as const,
  borderRadius: "20px" as const,
  paddingLeft: "60px" as const,
  paddingRight: "60px" as const,
  paddingBottom: "60px" as const,
  paddingTop: "60px" as const,
  marginTop: "30px" as const,
  marginBottom: "30px" as const,
  textAlign: "center" as const,
  position: "relative" as const,
};

const textStyle = {
  fontWeight: "bold" as const,
};
export default function PageHeader(props: pageHeaderProps) {
  return (
    <Container fluid>
      <div style={headerStyle}>
        <h1 className="display-2" style={textStyle}>
          {props.title}
        </h1>
        {props.subtitle && (
          <h3 className="display-5" style={textStyle}>
            {" "}
            {props.subtitle}
          </h3>
        )}
      </div>
    </Container>
  );
}
