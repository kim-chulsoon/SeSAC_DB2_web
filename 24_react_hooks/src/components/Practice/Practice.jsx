import { useForm } from "react-hook-form";

export default function Practice1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();

  const success = (data) => {
    console.log(data);
  };

  const fail = (err) => {
    if (err.name) {
      alert(err.name.message);
    } else if (err.age == "" || err.age) {
      alert(err.age.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(success, fail)}>
      <input
        type="text"
        placeholder="name"
        {...register("name", {
          required: "이름은 필수 항목입니다",
        })}
      />
      <br />
      <input
        type="number"
        placeholder="age"
        {...register("age", {
          required: "나이는 필수 항목입니다",
          min: {
            value: 0,
            message: "0 이상의 숫자만 입력 가능합니다",
          },
        })}
      />
      <br />
      <button>제출</button>
    </form>
  );
}
