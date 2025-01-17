import { useNavigate, useParams } from "react-router-dom";

export default function Detail({ products }) {
  const navigate = useNavigate();
  console.log(products);
  //   params를 통해서 몇 번 id 정보를 찾고있는지 확인
  // id 기준으로 product에서 원하는 데이터 찾기

  const params = useParams();
  console.log(params);
  //   {productID: '1'}

  const { productID } = useParams();
  console.log(productID);

  const [targetProduct] = products.filter((p) => p.id === Number(productID));

  if (!targetProduct) {
    return <main>없는 상품이에요</main>;
  }

  return (
    <main>
      <p>상품 detail page</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </button>
      <br />
      <ul>
        <li>판매번호 : {targetProduct.id}</li>
        <li>상품명 : {targetProduct.name}</li>
        <li>판매자 : {targetProduct.email}</li>
        <li>상세설명 : {targetProduct.body}</li>
      </ul>
    </main>
  );
}
