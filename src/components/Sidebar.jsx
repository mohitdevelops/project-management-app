import Button from "./Button";

export default function Sidebar({
	onAddProject,
	projects,
	selectedProject,
	selectedId,
}) {
	return (
		<aside>
			<div>
				<h2>Projects</h2>
				{projects.length > 0 && (
					<ul>
						{projects.map((project) => {
							let activeClass = project.id === selectedId ? "active" : "";
							return (
								<li key={project.id}>
									<button
										onClick={() => selectedProject(project.id)}
										className={activeClass}
									>
										{project.title}
									</button>
								</li>
							);
						})}
					</ul>
				)}
			</div>
			<Button onClick={onAddProject}>Add Project</Button>
		</aside>
	);
}
