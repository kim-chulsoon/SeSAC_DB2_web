export default function Result(props) {
  const { content, fruit, color, background } = props.data;
  return (
    <div>
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      <p
        style={{
          backgroundColor: background,
          color: color,
          width: "50px",
          height: "30px",
          textAlign: "center",
          lineHeight: "30px",
        }}
      >
        {content}
      </p>
    </div>
  );
}
