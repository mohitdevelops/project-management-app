import { Form } from "react-bootstrap";

export default function Input({ label, textarea, ...props }) {
	return (
		<Form.Group>
			<Form.Label>{label}</Form.Label>
			{textarea ? (
				<Form.Control as="textarea" {...props} />
			) : (
				<Form.Control {...props} />
			)}
		</Form.Group>
	);
}
