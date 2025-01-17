import ProductItem from "../components/ProductItem";

export default function ProductPage({ product }) {
  return (
    <main className="ProductPage">
      <div>상품목록</div>
      {product?.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </main>
  );
}
