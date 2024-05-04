import { Button } from "react-bootstrap";
import Input from "./Input";

export default function ProjectPanel() {
	return (
		<section className="panel">
			<div>
				<Input type="text" name="project_name" label="Project Name" size="md" />
				<Input
					name="project_description"
					textarea
					label="Description"
					size="md"
					rows={5}
				/>
				<Input type="date" name="project_date" label="Due Date" size="md" />
			</div>
			<menu>
				<li>
					<Button variant="none" size="md" className="text-white">
						Cancel
					</Button>
				</li>
				<li>
					<Button variant="success" size="md">
						Save
					</Button>
				</li>
			</menu>
		</section>
	);
}
