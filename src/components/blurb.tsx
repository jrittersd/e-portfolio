type blurbProps = {
  text: string;
  dimensions?: {
    height: string;
    width: string;
  };
};

let blurbStyle = {
  background: "#eee" as const,
  borderRadius: "20px" as const,
  overflowX: "hidden" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  display: "flex" as const,
  flexDirection: "row" as const,
  flexWrap: "wrap" as const,
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
