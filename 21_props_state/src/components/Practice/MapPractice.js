import { useRef, useState } from "react";

export function Map1() {
  const [list, setList] = useState([
    { name: "코디", email: "codi@gmail.com" },
    { name: "김철순", email: "nicnk90@gmail.com" },
  ]);

  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const addList = () => {
    const newList = list.concat({ name: input, email: input2 });
    setList(newList);
    setInput("");
    setInput2("");
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };

  const deleteList = (name) => {
    const newList = list.filter((email) => {
      return email.name !== name;
    });
    setList(newList);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="이름"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => {
          setInput2(e.target.value);
        }}
        placeholder="이메일"
        onKeyDown={activeEnter}
      />
      <button onClick={addList}>등록</button>
      <div>
        {list.map((el) => {
          return (
            <ul
              key={el.name}
              onDoubleClick={() => {
                deleteList(el.name);
              }}
            >
              {el.name} : {el.email}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export function Map2() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  console.log(inputRef1.current.value);
  const handleFocus = () => {
    inputRef1.current.value !== ""
      ? inputRef2.current.focus()
      : inputRef1.current.focus();
  };

  const [list, setList] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState("name");

  const addList = () => {
    const newList = list.concat({
      id: list.length + 1,
      title: inputTitle,
      name: inputName,
    });
    setList(newList);
    setInputName("");
    setInputTitle("");
  };

  const searchList = () => {
    let searchResult = list.filter((item) => {
      item[searchType].includes(inputSearch);

      if (!item[searchType].includes(inputSearch)) {
        return null;
      }

      return item;
    });
    console.log(searchResult);
    setResult(searchResult);
    // setInputSearch("");
  };

  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div>
      <fieldset>
        <label htmlFor="name">작성자 : </label>
        <input
          type="text"
          placeholder="작성자"
          ref={inputRef1}
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        {"     "}
        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          placeholder="제목"
          ref={inputRef2}
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        {"     "}
        <button onClick={(addList, handleFocus)}>작성</button>
      </fieldset>
      <br />

      <select name="type" onChange={selectSearchType}>
        <option value={"name"}>작성자</option>
        <option value={"title"}>제목</option>
      </select>
      {"     "}
      <input
        type="text"
        placeholder="검색어"
        name="search"
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
      />
      {"     "}
      <button onClick={searchList}>검색</button>
      <button>전체</button>

      <br />
      <table
        style={{
          border: "2px solid",
          borderCollapse: "collapse",
          margin: "auto 30px",
          width: "500px",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "2px solid" }}>번호</th>
            <th style={{ border: "2px solid" }}>제목</th>
            <th style={{ border: "2px solid" }}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((el) => {
            return (
              <tr style={{ border: "2px solid" }} key={el.id}>
                <td style={{ border: "2px solid" }}>{el.id}</td>
                <td style={{ border: "2px solid" }}>{el.title}</td>
                <td style={{ border: "2px solid" }}>{el.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />

      <div>
        <h4>검색결과</h4>
        {result.length == 0 ? (
          <h3>검색 결과가 없어요</h3>
        ) : (
          <table
            style={{
              border: "2px solid",
              borderCollapse: "collapse",
              margin: "auto 30px",
              width: "500px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "2px solid" }}>번호</th>
                <th style={{ border: "2px solid" }}>제목</th>
                <th style={{ border: "2px solid" }}>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((el) => {
                return (
                  <tr key={el.id} style={{ border: "2px solid" }}>
                    <td style={{ border: "2px solid" }}>{el.id}</td>
                    <td style={{ border: "2px solid" }}>{el.title}</td>
                    <td style={{ border: "2px solid" }}>{el.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
