import Product from "./Product";

export default function Products({ products, searchProduct, orderProduct }) {
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1
  );
  let sortedProducts = filteredProducts;

  switch (orderProduct) {
    case '1':
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      break;
    case '2':
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      break;
    case '3':
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price );
      break;
    case '4':
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price );
      break;
    default:
      break;
  }
  // console.log(orderProduct);

  return (
    <>
      {sortedProducts.length ? (
        <ul className="p-6 flex justify-around flex-wrap">
          {sortedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <p className="text-gray-700 text-2xl text-center">Nenhum resultado encontrado</p>
        </div>
      )}
    </>
  );
}
