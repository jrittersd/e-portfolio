import TextBoxContainer from "./textBoxContainer";

type artifactType = {
  outerBackground?: string;
  dimensions?: {
    height: string;
    width: string;
  };
  artifact: Array<{
    name: string;
    text: string;
    link: string;
  }>;
};

const defaultBackground = "#f2f0e8" as const;
const defaultDimensions = {
  height: "100",
  width: "100",
};

export default function ArtifactContainer(props: artifactType) {
  const background = props.outerBackground
    ? props.outerBackground
    : defaultBackground;
  const outerDimensions = props.dimensions
    ? props.dimensions
    : defaultDimensions;
  return (
    <>
      {props.artifact.map((art) => {
        console.log(background);
        console.log(art);
        return (
          <>
            <TextBoxContainer
              outerDimensions={outerDimensions}
              outerBackground={background}
              innerBackground={background}
              title={art.name}
              text={art.text}
              downloadUrl={art.link}
            />
          </>
        );
      })}
    </>
  );
}
