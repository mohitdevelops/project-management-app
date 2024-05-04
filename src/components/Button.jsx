import { FaPlus } from "react-icons/fa";

export default function Button({ children, ...props }) {
	return (
		<button className="addBtn" {...props}>
			<FaPlus /> {children}
		</button>
	);
}
