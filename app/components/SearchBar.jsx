export default function SearchBar({
  searchActive,
  searchProduct,
  onSearchProductChange,
  handleSearchProduct,
}) {
  return (
    <section className="w-screen h-12">
      {searchActive && (
        <input
          className="w-screen text-black text-center font-extralight p-1 border-solid border-b-2 border-t-2 border-red-500 focus:outline-none shadow-md"
          type="search"
          placeholder="PESQUISE AQUI"
          maxLength={30}
          value={searchProduct}
          onChange={(e) => onSearchProductChange(e.target.value)}
          // onChange={(e) => handleSearchProduct(e.target.value)}
        />
      )}
    </section>
  );
}
