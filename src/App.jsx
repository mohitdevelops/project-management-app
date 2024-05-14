import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import ProjectPanel from "./components/ProjectPanel";
import NoProject from "./components/NoProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
	const [projects, setProjects] = useState({
		addProject: undefined,
		projectsList: [],
	});

	function handleCancelProject() {
		setProjects((prev) => {
			return { ...prev, addProject: undefined };
		});
	}

	function handleAddProject() {
		setProjects((prev) => {
			return { ...prev, addProject: null };
		});
	}

	function handleSelectProject(id) {
		setProjects((prev) => {
			return { ...prev, addProject: id };
		});
	}

	function handleSubmittedData(data) {
		setProjects((prev) => {
			const newProjectData = { ...data, id: Math.random() };
			return {
				...prev,
				addProject: undefined,
				projectsList: [...prev.projectsList, newProjectData],
			};
		});
	}

	function handleDeleteProject() {
		setProjects((prev) => {
			return {
				...prev,
				addProject: undefined,
				projectsList: prev.projectsList.filter(
					(project) => project.id !== prev.addProject
				),
			};
		});
	}

	const selectedProject = projects.projectsList.find(
		(item) => item.id === projects.addProject
	);

	let content = <SelectedProject project={selectedProject} deleteProject={handleDeleteProject} />;

	if (projects.addProject === null) {
		content = (
			<ProjectPanel
				addProjectData={handleSubmittedData}
				onCancel={handleCancelProject}
			/>
		);
	} else if (projects.addProject === undefined) {
		content = <NoProject onAddProject={handleAddProject} />;
	}

	return (
		<Container>
			<Row>
				<Col md={8} className="text-center m-auto mt-5">
					<h1 className="title">Manage Your Projects</h1>
				</Col>
			</Row>
			<Row>
				<Col md={8} className="mt-2 m-auto wrapper">
					<Row>
						<Col xs={4} className="p-3 pb-0">
							<Sidebar
								onAddProject={handleAddProject}
								projects={projects.projectsList}
								selectedProject={handleSelectProject}
								selectedId={projects.addProject}
							/>
						</Col>
						<Col xs={8} className="p-4 pb-0">
							{content}
						</Col>
					</Row>
				</Col>
			</Row>
			<footer>
				<Row>
					<Col md={8} className="m-auto mt-4  text-center">
						<p>
							Designed and Developed by{" "}
							<a href="https://twitter.com/mohitdevelops" target="_blank">
								@mohitdevelops
							</a>{" "}
						</p>
					</Col>
				</Row>
			</footer>
		</Container>
	);
}

export default App;
