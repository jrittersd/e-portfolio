import "./btn.css";

type btnProps = {
  downloadUrl: string;
  btnText?: string;
  addStyle?: { [key: string]: string };
};
const btnText = "DOWNLOAD";
let btnStyle = {
  color: "white" as const,
  textAlign: "center" as const,
  background: "#24a0ed" as const,
  height: "3rem" as const,
  width: "10rem" as const,
  borderRadius: "15px" as const,
  fontFamily: "consolas" as const,
};

const getDownloadFileName = (url: string) => {
  return url.split("/").pop() as string;
};

export default function DownloadButton(props: btnProps) {
  const handleClick = () => {
    fetch(props.downloadUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = getDownloadFileName(props.downloadUrl);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert("Unable to fetch data"));
  };
  if (props.addStyle) {
    btnStyle = { ...btnStyle, ...props.addStyle };
  }
  return (
    <button style={btnStyle} className="downloadBtn" onClick={handleClick}>
      {props.btnText ? props.btnText : btnText}
    </button>
  );
}
