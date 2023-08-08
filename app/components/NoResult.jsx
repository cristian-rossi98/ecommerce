export default function NoResult({value}) {
  return (
    <div className="pt-32 flex justify-center items-center">
      <p className="text-gray-700 text-2xl text-center">
        {value}
      </p>
    </div>
  );
}
