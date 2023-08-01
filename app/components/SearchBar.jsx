export default function SearchBar({ searchActive }) {
  return (
    <section className="w-full h-8">
      {searchActive && (
        <input
          className="w-full text-black text-center font-extralight p-1 border-solid border-b-2 border-t-2 border-red-500 focus:outline-none"
          type="search" placeholder="PESQUISE AQUI"
        />
      )}
    </section>
  );
}
