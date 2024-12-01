type listBoxProps = {
  list: Array<string>;
  dimensions?: {
    height: string;
    width: string;
  };
  background?: string;
};

let listBoxStyle: { [key: string]: string } = {
  overflowX: "hidden" as const,
  overflowY: "hidden" as const,
  display: "flex" as const,
  flexDirection: "row" as const,
  flexWrap: "wrap" as const,
};

const listStyle = {
  listStyleType: "-",
};

const listElemStyle = {
  fontSize: "1em" as const,
  whiteSpace: "pre-wrap" as const,
  wordWrap: "break-word" as const,
  overflowWrap: "break-word" as const,
  wordBreak: "break-word" as const,
  lineHeight: "1.2" as const,
  maxWidth: "100%" as const,
  hyphens: "auto" as const,
  paddingBottom: "1em" as const,
  paddingRight: "2em" as const,
};

export default function ListBox(props: listBoxProps) {
  if (props.dimensions) {
    listBoxStyle = { ...listBoxStyle, ...props.dimensions };
  }

  return (
    <div style={listBoxStyle}>
      <ul style={listStyle}>
        {props.list.map((elem) => {
          return <li style={listElemStyle}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}
