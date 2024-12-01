import React from "react";

type boxProps = {
  background: string;
  dimensions: {
    height: string;
    width: string;
  };
  component?: React.ReactNode;
};

const defaultStyle = {
  borderRadius: "20px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

export default function BoxComponent(props: boxProps) {
  const propStyle = {
    background: props.background,
    height: props.dimensions.height,
    width: props.dimensions.width,
  };
  return (
    <div style={{ ...defaultStyle, ...propStyle }}>
      {props.component && props.component}
    </div>
  );
}
