import FeaturedProduct from "./FeaturedProduct";
import SnapProduct from "./SnapProduct";
import NoResult from "./NoResult";

import "../styles/product.css";
import "../styles/snapProduct.css";

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

  const productColors = [
    "rgb(55 48 163)",
    "rgb(0 0 0)",
    "rgb(134 25 143)",
    "rgb(0 0 0)",
  ];
  const productColorsBackground = [
    "rgb(55, 48, 163, 0.95)",
    "rgb(0, 0, 0, 0.95)",
    "rgb(134, 25, 143, 0.95)",
    "rgb(0, 0, 0, 0.95)",
  ];
  const degree = ["45", "135"];

  const featuredProductsMen = sortedProducts.filter(
    (product) => product.category === "men's clothing"
  );

  const featuredProductsJewelery = sortedProducts.filter(
    (product) => product.category === "jewelery"
  );

  const snapProductsElectronics = sortedProducts.filter(
    (product) => product.category === "electronics"
  );

  const featuredProductsWomen = sortedProducts.filter(
    (product) => product.category === "women's clothing"
  );

  return (
    <>
      {sortedProducts.length ? (
        <div className="w-full flex justify-center flex-col">
          <ul className="flex justify-center flex-wrap">
            {featuredProductsMen.map((product, index) => (
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
              />
            ))}
            <li className="bg-black px-8 pb-16 pt-8">
              <h1 className="text-xl font-bold mb-8">
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
            {featuredProductsJewelery.map((product, index) => (
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
              />
            ))}
          </ul>
          <section className="py-8 w-full">
            {/* <div className="w-full overflow-x-auto snap-x"> */}
            <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
              {snapProductsElectronics.map((product) => (
                <SnapProduct key={product.id} product={product} />
              ))}
            </div>
            {/* </div> */}
          </section>
          <ul>
            {featuredProductsWomen.map((product, index) => (
              <div className="p-8">
                <FeaturedProduct
                  key={product.id}
                  product={product}
                  classStyle={`relative flex justify-center items-center w-full h-96
                
                    cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-xl sm:w-60`}
                  inlineStyle="rgb(245 245 245)"
                  inlineStyleBackground="rgb(245 245 245)"
                  degree={degree[index % degree.length]}
                  cartPage={false}
                />
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <NoResult value="Nenhum produto encontrado" />
      )}
    </>
  );
}
