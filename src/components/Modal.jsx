import { Modal } from "react-bootstrap";

export default function ModalDialogue({ children, show }) {
	return (
		<Modal show={show} centered size="sm" animation={false}>
			<Modal.Body>{children}</Modal.Body>
		</Modal>
	);
}
