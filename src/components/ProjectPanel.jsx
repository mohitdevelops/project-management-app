import { Button } from "react-bootstrap";
import Input from "./Input";
import { useState } from "react";
import ModalDialogue from "./Modal";

export default function ProjectPanel({ addProjectData, onCancel }) {
	const [projectData, setProjectData] = useState({
		title: "",
		description: "",
		due_date: "",
	});
	const [error, setError] = useState(false);

	const handleData = (e) => {
		const { value, name } = e.target;
		setProjectData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	function handleSubmitProject() {
		if (
			projectData.title.trim() === "" ||
			projectData.description.trim() === "" ||
			projectData.due_date.trim() === ""
		) {
			setError(true);
			return;
		}
		addProjectData(projectData);
	}

	return (
		<>
			<section className="panel">
				<div>
					<Input
						value={projectData.title}
						onChange={handleData}
						type="text"
						name="title"
						label="Project Name"
						size="md"
					/>
					<Input
						value={projectData.description}
						onChange={handleData}
						name="description"
						textarea
						label="Description"
						size="md"
						rows={5}
					/>
					<Input
						value={projectData.due_date}
						onChange={handleData}
						type="date"
						name="due_date"
						label="Due Date"
						size="md"
					/>
				</div>
				<menu>
					<li>
						<Button
							variant="none"
							size="md"
							className="text-white"
							onClick={onCancel}
						>
							Cancel
						</Button>
					</li>
					<li>
						<Button variant="success" size="md" onClick={handleSubmitProject}>
							Save
						</Button>
					</li>
				</menu>
			</section>
			<ModalDialogue show={error}>
				<h4>Error</h4>
				<p>Seems like you missed a field.</p>
				<Button size="sm" variant="danger" onClick={() => setError(false)}>
					Close
				</Button>
			</ModalDialogue>
		</>
	);
}
