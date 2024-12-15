import styles from './ProfileStyles.module.css';
import Img from '../../assets/avatar-1.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/BasantH.pdf';
import { useTheme } from '../../common/ThemeContext';

function Profile() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="profile" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={Img}
          className={styles.profile}
          alt="Profile picture of Basant"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Basant
          <br />
          Hafiz
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/BasanttH" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/basant-h-472a8b205/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        With passion for creating modern, responsive web apps with a focus on usability and performance.
        </p>
        <a href={CV} >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Profile;
