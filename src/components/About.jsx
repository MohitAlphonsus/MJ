import { about } from '../constants/about';
import styles from './About.module.scss';

function About() {
	return (
		<div className={styles.about}>
			<span className="subheading">⭐ About Me</span>
			<h2 className="heading-secondary">Turning design into website</h2>
			<p className="text-primary">
				Innovative and detail-oriented Fresher Front End Developer with a
				passion for creating responsive and user-friendly websites. Seeking for
				opportunities and challenges that will expand my skill set.
			</p>
			<h3 className="heading-tertiary">My education</h3>
			<div className={styles.about__education}>
				{about.education.map(({ id, timeline, stream, place }) => (
					<div className={styles.row} key={id}>
						<span className={styles.row__timeline}>{timeline}</span>
						<span className={styles.row__stream}>{stream}</span>
						<span className={styles.row__place}>{place}</span>
					</div>
				))}
			</div>
			<h3 className="heading-tertiary">Tools & Skills</h3>
			<div className={styles.tools}>
				{about.tools.map(({ id, icon: Icon, name }) => (
					<span key={id} className={styles.tools__tool}>
						<Icon className={styles.tools__icon} />
						{name}
					</span>
				))}
			</div>
			<div className={styles.skills}>
				{about.skills.map(({ id, name }) => (
					<span key={id}>#{name}</span>
				))}
			</div>
		</div>
	);
}

export default About;
