import FeaturedProduct from "./FeaturedProduct";
import SnapProduct from "./SnapProduct";

import "./product.css";
import "./snapProduct.css";

export default function Products({ products }) {
  const colors = {
    men: ["rgb(100 116 139)"],
    jewelery: ["rgb(15 23 42)"],
    women: ["rgb(244 244 244)"],
  };

  const backgrounds = {
    men: ["rgb(100, 116, 139, 0.975)"],
    jewelery: ["rgb(15, 23, 42, 0.99)"],
    women: ["rgb(244 244 244)"],
  };

  const degree = ["40", "130"];

  const classes = {
    men: [
      "relative flex justify-center items-center w-full h-96 h-44rem cursor-pointer transition duration-200 ease-in-out lg:w-1/2 xl:w-1/4 overflow-hidden relative product-list",
    ],
    jewelery: [
      "relative flex justify-center items-center w-full h-96 h-44rem cursor-pointer transition duration-200 ease-in-out lg:w-1/2 xl:w-1/4 overflow-hidden relative product-list",
    ],
  };

  const snapProductsElectronics = products.filter(
    (product) => product.category === "electronics"
  );

  const featuredProductsWomen = products.filter(
    (product) => product.category === "women's clothing"
  );

  const featuredProductsByCategory = {
    men: products.filter((product) => product.category === "men's clothing"),
    jewelery: products.filter((product) => product.category === "jewelery"),
  };

  const renderFeaturedProducts = (category) => {
    return featuredProductsByCategory[category].map((product, index) => (
      <FeaturedProduct
        key={product.id}
        product={product}
        classStyle={classes[category]}
        inlineStyle={colors[category][index % colors[category].length]}
        inlineStyleBackground={
          backgrounds[category][index % backgrounds[category].length]
        }
        degree={degree[index % degree.length]}
      />
    ));
  };

  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <ul className="flex justify-center flex-wrap lg:justify-start">
          {renderFeaturedProducts("men")}
        </ul>
        <ul className="flex justify-center flex-wrap">
          <li className="bg-black px-8 lg:px-16 lg:py-16 pb-16 pt-8 lg:flex lg:flex-row">
            <h1 className="text-xl font-bold mb-8 lg:hidden">
              Detalhes do Lançamento: O Elegante Glamour X1
            </h1>
            <div className="hidden lg:flex lg:flex-col lg:mr-16 lg:justify-between">
              <h1 className="text-xl lg:text-5xl font-bold lg:mb-0">
                Detalhes do Lançamento: O Elegante Glamour X1
              </h1>
              <p className="bg-neutral-100 mt-4 py-2 px-4 text-neutral-800 font-extrabold text-lg rounded-sm inline-block">
                EM BREVE
              </p>
            </div>
            <p className="text-justify lg:text-xl">
              A prestigiada série Glamour X1 continua a surpreender. Depois do
              impactante lançamento da edição 'Luxo', chegou a hora de desvendar
              os emocionantes detalhes sobre a mais recente joia: o tão
              aguardado modelo 'Élégance'. Revelado pela Equipe Glamour com
              entusiasmo neste ano, o produto, inicialmente conhecido como
              'Radiance', passou por uma transformação sofisticada e agora é
              apresentado como o Elegante Glamour X1 'Élégance'. Prepare-se para
              uma experiência que reúne estilo, luxo e elegância, como nunca
              antes, com o Elegante Glamour X1 'Élégance'.
            </p>
            <p className="bg-neutral-100 mt-4 py-2 px-4 text-neutral-800 font-extrabold text-lg rounded-sm inline-block lg:hidden">
              EM BREVE
            </p>
          </li>
        </ul>
        <ul className="flex justify-center flex-wrap lg:justify-start">
          {renderFeaturedProducts("jewelery")}
        </ul>
        <section className="pt-12 w-full bg-neutral-950">
          <div className="relative w-full flex items-center gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
            {snapProductsElectronics.map((product) => (
              <SnapProduct key={product.id} product={product} />
            ))}
          </div>
        </section>
        <ul className="flex justify-center flex-wrap p-4 lg:justify-start">
          {featuredProductsWomen.map((product, index) => (
            <div className="px-8 py-4 w-full lg:w-1/2 xl:w-1/4 lg:px-4 lg:py-4">
              <FeaturedProduct
                key={product.id}
                product={product}
                classStyle={`relative flex justify-center items-center w-full h-96 h-44rem cursor-pointer transition duration-200 ease-in-out overflow-hidden relative product-background`}
                inlineStyle="rgb(244 244 244)"
                inlineStyleBackground="rgb(244 244 244)"
                degree={degree[index % degree.length]}
              />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}