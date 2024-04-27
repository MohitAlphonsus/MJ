import styles from './Projects.module.scss';
import project1 from '../assets/project-1.png';
import { Button } from '../components';
import { projects } from '../constants/projects';

function Projects() {
	return (
		<div className={styles.projects}>
			<span className="subheading">⭐ My Projects</span>
			<h2 className="heading-secondary ">Check out my works</h2>
			<div className={styles.projects__container}>
				{projects.map(project => (
					<div className={styles.card} key={project.id}>
						<div
							className={`${styles.card__side} ${styles['card__side--front']}`}
							style={{ backgroundImage: `url(${project.imgSrc})` }}
						>
							&nbsp;
						</div>
						<div
							className={`${styles.card__side} ${styles['card__side--back']}`}
						>
							<div className={styles.card__content}>
								<h3 className={styles.card__heading}>{project.projectName}</h3>
								<p className={styles.card__desc}>{project.desc}</p>
								<div className={styles.card__tools}>
									{project.tools.map(tool => (
										<span key={tool.id}>{tool.toolName}</span>
									))}
								</div>
								<Button size="SMALL">Visit</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
