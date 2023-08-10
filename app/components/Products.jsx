import FeaturedProduct from "./FeaturedProduct";
import SnapProduct from "./SnapProduct";
import NoResult from "./NoResult";

import "../styles/product.css";

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

  const productColors = ["rgb(30 64 175)", "rgb(38 38 38)", "rgb(159 18 57)"];
  const productColorsBackground = [
    "rgb(30, 64, 175, 0.9)",
    "rgb(38, 38, 38, 0.9)",
    "rgb(159, 18, 57, 0.9)",
  ];
  const degree = ["45", "135", "45"];

  // ${productColors[index % productColors.length]}

  return (
    <>
      {sortedProducts.length ? (
        <div className="w-full flex justify-center">
          <ul className="flex justify-center flex-wrap">
            {sortedProducts.map((product, index) => (
              <FeaturedProduct
                key={product.id}
                product={product}
                classStyle={`relative flex justify-center items-center w-full h-96 
                  
                  cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-xl sm:w-60`}
                inlineStyle={productColors[index % productColors.length]}
                inlineStyleBackground={
                  productColorsBackground[
                    index % productColorsBackground.length
                  ]
                }
                degree={degree[index % degree.length]}
                cartPage={false}
                category={`men's clothing`}
              />
            ))}
            <li className="bg-black px-4 py-8">
              <h1 className="text-xl font-bold mb-2">
                Release Details: The Yeezy BOOST 350 V2 ‘Natural'
              </h1>
              <p>
                The Yeezy BOOST 350 V2 lineup continues to grow. We recently had
                the ‘Carbon’ iteration, and now release details have been locked
                in for this ‘Natural’ joint. Revealed by Yeezy Mafia earlier
                this year, the shoe was originally called ‘Abez’, which
                translated to ‘Tin’ in Hebrew. It’s now undergone a name change,
                and will be referred to as ‘Natural’.
              </p>
            </li>
            {sortedProducts.map((product, index) => (
              <FeaturedProduct
                key={product.id}
                product={product}
                classStyle={`relative flex justify-center items-center w-full h-96 
                  
                  cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-xl sm:w-60`}
                inlineStyle={productColors[index % productColors.length]}
                inlineStyleBackground={
                  productColorsBackground[
                    index % productColorsBackground.length
                  ]
                }
                degree={degree[index % degree.length]}
                cartPage={false}
                category={`jewelery`}
              />
            ))}
            <SnapProduct />
          </ul>
        </div>
      ) : (
        <NoResult value="Nenhum produto encontrado" />
      )}
    </>
  );
}
