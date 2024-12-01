import Blurb from "../components/blurb";
import BoxComponent from "../components/box";

type blurbContainerProps = {
  background: string;
  outerDimensions: {
    height: string;
    width: string;
  };
  text: string;
};

export default function BlurbContainer(props: blurbContainerProps) {
  return (
    <>
      <BoxComponent
        background={props.background}
        dimensions={props.outerDimensions}
        component={
          <Blurb
            text={props.text}
            dimensions={{ height: "90%", width: "95%" }}
          />
        }
      />
    </>
  );
}
