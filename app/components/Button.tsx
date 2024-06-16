interface ButtonProps {
	text: string;
	onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
			{text}
		</button>
	);
};

export default Button;
