export default function Input({ setData }) {
  const handleChange = (e) => {
    setData((prevState) => {
      return { ...prevState, content: e.target.value };
    });
  };
  return (
    <div>
      내용:{" "}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
