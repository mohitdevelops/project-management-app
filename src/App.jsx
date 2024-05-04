import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import ProjectPanel from "./components/ProjectPanel";
import NoProject from "./components/NoProject";
import { useState } from "react";

function App() {
	const [projects, setProjects] = useState({
		addProject: false,
		projectsList: [],
	});

	function handleAddProject() {
		setProjects((prev) => {
			return { ...prev, addProject: true };
		});
	}

	return (
		<Container>
			<Col md={8} className="mt-5 m-auto wrapper">
				<Row>
					<Col xs={4} className="p-3 pb-0">
						<Sidebar onAddProject={handleAddProject} />
					</Col>
					<Col xs={8} className="p-4 pb-0">
						{projects.addProject ? (
							<ProjectPanel />
						) : (
							<NoProject onAddProject={handleAddProject} />
						)}
					</Col>
				</Row>
			</Col>
			{/* <Row></Row> */}
		</Container>
	);
}

export default App;
