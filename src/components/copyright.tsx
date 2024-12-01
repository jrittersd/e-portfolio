export default function Copyright() {
  const year = new Date().getFullYear();

  return (
    <p
      style={{
        textAlign: "center" as const,
        fontFamily: "Consolas" as const,
        color: "darkgray" as const,
      }}
    >{`© ${year} James S. Ritter | Built using Vite + React`}</p>
  );
}
