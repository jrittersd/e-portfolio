import TextBox from "../components/textBox";
import BoxComponent from "../components/box";

type blurbContainerProps = {
  outerBackground?: string;
  innerBackground?: string;
  outerDimensions: {
    height: string;
    width: string;
  };
  text: string;
  title?: string;
};

export default function TextBoxContainer(props: blurbContainerProps) {
  return (
    <>
      <BoxComponent
        background={props.outerBackground ? props.outerBackground : "inherit"}
        dimensions={props.outerDimensions}
        component={
          <>
            {props.title && (
              <h3
                className="display-6"
                style={{
                  width: "100%" as const,
                  paddingTop: "10px" as const,
                  paddingBottom: "10px" as const,
                }}
              >
                {props.title}
              </h3>
            )}
            <TextBox
              text={props.text}
              dimensions={{ height: "100%" as const, width: "100%" as const }}
              background={
                props.innerBackground ? props.innerBackground : "inherit"
              }
            />
          </>
        }
      />
    </>
  );
}
