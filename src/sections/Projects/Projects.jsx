import styles from './ProjectsStyles.module.css';
import lemon from '../../assets/Logo Footer.2c859235d6c57bb54176.png';
import Watering_sys from '../../assets/Auto.png';
import TemSystem from '../../assets/img2.png';
import Audio_FLT from '../../assets/Proj3.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lemon}
          link="https://github.com/BasanttH/Frontened-capstone-LittileLemon.git"
          h3="Little Lemon - Coursera"
          p="Website - booking table form "
        />
        <ProjectCard
          src={Watering_sys}
          link="https://github.com/BasanttH/Auto_Watering_System.git"
          h3="Auto watering system "
          p="Plant watering system with Arduino"
        />
          <ProjectCard
          src={Audio_FLT}
          link="https://acrobat.adobe.com/id/urn:aaid:sc:US:acf43954-379d-4b51-8cea-525c72cc61cf"
          h3="Audio Filter"
          p="Digital Filters,Noise Removal"
        />
        <ProjectCard
          src={TemSystem}
          link="https://www.youtube.com/watch?v=CpE3X7Xkbzw"
          h3="Temperature Alert System"
          p="Temperature alert system with audible alarms"
        />
         <ProjectCard
          src={TemSystem}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hair day website"
          p="Hair day salon website - HTML,CSS"
        />
      
      </div>
    </section>
  );
}

export default Projects;
