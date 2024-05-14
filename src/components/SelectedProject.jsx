import moment from "moment";
import { FaCalendarAlt, FaTrash } from "react-icons/fa";

export default function SelectedProject({ project, deleteProject }) {
	console.log(project);
	return (
		<>
			<header className="d-flex justify-content-between align-items-center">
				<h4>{project.title}</h4>
				<button className="deletebtn" title="Delete Project" onClick={deleteProject}>
					<FaTrash />
				</button>
			</header>
			<section className="selectedcontent">{project.description}</section>
			<p className="m-0 d-flex align-items-center gap-2 fs-6">
				<FaCalendarAlt />
				{moment(project.due_date).format("DD/MM/YYYY")}
			</p>
		</>
	);
}
