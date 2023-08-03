import Product from "./Product";

export default function Products({ products, searchProduct, orderProduct }) {
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1
  );
  let sortedProducts = filteredProducts;

  switch (orderProduct) {
    case "1":
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      break;
    case "2":
      sortedProducts = [...filteredProducts].sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      break;
    case "3":
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      break;
    case "4":
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }
  // console.log(orderProduct);

  return (
    <>
      {sortedProducts.length ? (
        <div className="w-full flex justify-center">
          <ul className="px-2 py-6 flex justify-center flex-wrap">
            {sortedProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                classStyle={
                  "flex flex-col items-center w-5/12 p-4 m-2 bg-white rounded-md cursor-pointer transition duration-200 ease-in-out shadow-lg hover:scale-105 hover:shadow-xl sm:w-60"
                }
                cartPage={false}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <p className="text-gray-700 text-2xl text-center">
            Nenhum resultado encontrado
          </p>
        </div>
      )}
    </>
  );
}
