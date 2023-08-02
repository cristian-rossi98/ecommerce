import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <button
        className="mb-4 bg-red-500 p-2 px-6 text-sm font-semibold rounded-sm hover:bg-red-600"
        onClick={handleBack}
      >
        VOLTAR
      </button>
    </>
  );
}
