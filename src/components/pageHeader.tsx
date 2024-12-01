import Container from "react-bootstrap/Container";
import image from "../assets/usd.png";

type pageHeaderProps = {
  title: string;
  subtitle?: string;
};

const headerStyle = {
  backgroundImage: `url(${image})`,
  borderRadius: "20px",
  paddingLeft: "60px",
  paddingRight: "60px",
  paddingBottom: "60px",
  paddingTop: "60px",
  marginTop: "30px",
  marginBottom: "30px",
  textAlign: "center" as const,
  position: "relative",
};

const textStyle = {
  fontWeight: "bold",
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
