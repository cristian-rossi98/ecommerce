import "./skeleton.css";

export default function Skeleton({ itemsNumber, children }) {
  return (
    <>
      <main className="px-8">
        {children}
        <div className="w-full flex justify-center">
          <ul className="flex justify-center flex-wrap ">
            {[...Array(itemsNumber)].map((_, index) => (
              <li
                key={index}
                className="skeleton flex flex-col items-center w-full p-4 bg-white rounded-md h-96 lg:w-1/2 lg:h-44rem xl:w-1/4"
              >
                <div className="h-44 w-52 flex justify-center items-center mx-8">
                  <div className="skeleton__thumbnail"></div>
                </div>
                <div className="skeleton__info h-32 w-full flex flex-col pt-4">
                  <h1 className="skeleton__title text-xs font-semibold text-black"></h1>
                  <p className="skeleton__description text-sm font-light text-black"></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
