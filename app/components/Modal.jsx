import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, onClose, children, width }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div
        className="bg-white rounded-sm p-8 z-10 relative"
        style={{
          width: `${width}`,
        }}
      >
        <button
          onClick={onClose}
          className="mt-4 text-black px-4 py-2 rounded-sm outline-none absolute top-0 right-0"
        >
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
}
// w-4/5 lg:w-1/2
