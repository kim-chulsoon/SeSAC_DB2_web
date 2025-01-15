import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function RealPost() {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(response.data);
    setPost(response.data.slice(0, 10));
  };

  //   useEffect에는 async 사용 불가
  //  async await를 사용하는 함수를 따로 만들어야 함
  useEffect(() => {
    // getPost();
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>RealPost</h1>
      {post.length === 0 ? (
        <span>Loading</span>
      ) : (
        post.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      )}
    </>
  );
}
