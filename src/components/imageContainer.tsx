type imgProps = {
  imgUrl: string;
  dimensions?: {
    height: string;
    width: string;
  };
};

let imgStyle = { borderRadius: "20px" as const, overflowX: "hidden" as const };

export default function ImageContainer(props: imgProps) {
  if (props.dimensions) {
    const dimensions = {
      height: props.dimensions.height,
      width: props.dimensions.width,
    };
    imgStyle = { ...imgStyle, ...dimensions };
  }

  return (
    <div>
      <img src={props.imgUrl} style={imgStyle} />
    </div>
  );
}
