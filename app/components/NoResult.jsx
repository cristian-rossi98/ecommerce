import { TbMoodSad } from "react-icons/tb";

export default function NoResult({ value }) {
  return (
    <div className="pt-32 flex justify-center items-center flex-col">
      <div className="border-2 border-neutral-800 rounded-full border-dashed p-6 mb-4">
        <TbMoodSad className="text-neutral-800 text-3xl " />
      </div>
      <p className="text-neutral-800 text-2xl text-center font-medium">
        {value}
      </p>
    </div>
  );
}
