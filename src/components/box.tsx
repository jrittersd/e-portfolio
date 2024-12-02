import React from "react";

type boxProps = {
  background: string;
  dimensions: {
    height: string;
    width: string;
  };
  component?: React.ReactNode;
  componentArr?: Array<React.ReactNode>;
  styleAdd?: { [key: string]: string };
};

const defaultStyle = {
  borderRadius: "20px" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  display: "flex" as const,
  flexDirection: "row" as const,
  flexWrap: "wrap" as const,
  boxShadow: "3px 3px lightgray" as const,
  paddingBottom: "1em" as const,
  paddingTop: "1em" as const,
  paddingLeft: "2em" as const,
  marginBottom: "2em" as const,
};

export default function BoxComponent(props: boxProps) {
  let propStyle = {
    background: props.background,
    height: props.dimensions.height,
    width: props.dimensions.width,
  };
  if (props.styleAdd) {
    propStyle = { ...propStyle, ...props.styleAdd };
  }
  return (
    <div style={{ ...defaultStyle, ...propStyle }}>
      {props.component && props.component}
      {props.componentArr &&
        props.componentArr.map((comp) => {
          return <>{comp}</>;
        })}
    </div>
  );
}
