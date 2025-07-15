interface SubmitButtonProps {
  onClick: () => void;
  label: string;
}

const SubmitButton = ({ onClick, label }: SubmitButtonProps) => (
  <button
    onClick={onClick}
    className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800"
  >
    {label}
  </button>
);

export default SubmitButton;
