import { Container } from "react-bootstrap";
import noteImage from "../assets/note.png";
import Button from "./Button";

export default function NoProject({ onAddProject }) {
	return (
		<section className="noproject">
			<Container fluid className="text-center pt-5 pb-5">
				<img src={noteImage} alt="project" />
				<h4>No Project Selected</h4>
				<p>Select a project or create new project</p>
				<Button onClick={onAddProject}>Create new</Button>
			</Container>
		</section>
	);
}
