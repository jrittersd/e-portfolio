type textBoxProps = {
  text: string;
  dimensions?: {
    height: string;
    width: string;
  };
  background: string;
};

let textBoxStyle: { [key: string]: string } = {
  background: "" as const,
  borderRadius: "20px" as const,
  overflowX: "hidden" as const,
  overflowY: "hidden" as const,
  // alignItems: "center" as const,
  // justifyContent: "center" as const,
  display: "flex" as const,
  flexDirection: "row" as const,
  flexWrap: "wrap" as const,
  // wrap words
  fontSize: "1.4em" as const,
  whiteSpace: "pre-wrap" as const,
  wordWrap: "break-word" as const,
  overflowWrap: "break-word" as const,
  wordBreak: "break-word" as const,
  lineHeight: "1.8" as const,
  maxWidth: "100%" as const,
  hyphens: "auto" as const,
  paddingTop: "1em" as const,
  paddingBottom: "1em" as const,
  paddingRight: "2em" as const,
};

export default function TextBox(props: textBoxProps) {
  textBoxStyle = { ...textBoxStyle, background: props.background };

  if (props.dimensions) {
    textBoxStyle = { ...textBoxStyle, ...props.dimensions };
  }

  return <div style={textBoxStyle}>{props.text}</div>;
}
