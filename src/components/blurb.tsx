type blurbProps = {
  text: string;
  dimensions?: {
    height: string;
    width: string;
  };
};

let blurbStyle = {
  background: "#eee",
  borderRadius: "20px",
  overflowX: "hidden",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const blurbTextStyle = {
  fontFamily: "Brush Script MT",
  fontSize: "3em",
};

export default function Blurb(props: blurbProps) {
  if (props.dimensions) {
    const dimensions = {
      height: props.dimensions.height,
      width: props.dimensions.width,
    };
    blurbStyle = { ...blurbStyle, ...dimensions };
  }

  return (
    <div style={blurbStyle}>
      <h2 style={blurbTextStyle}>{props.text}</h2>
    </div>
  );
}
