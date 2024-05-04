import Button from "./Button";

export default function Sidebar({ onAddProject }) {
	return (
		<aside>
			<div>
				<h1>Projects</h1>
				<ul>
					<li>list </li>
					<li>list </li>
					<li>list </li>
				</ul>
			</div>
			<Button onClick={onAddProject}>Add Project</Button>
		</aside>
	);
}
