import styles from './projects.scss';
import { Fade } from '../fade/fade.jsx';
import { useState } from 'react';

// Pointmap assets
import pointMapClustering from '../../assets/pointmap/clustering.gif';
import pointMapDashboard from '../../assets/pointmap/adminDashboard.gif';
import pointMapLogging from '../../assets/pointmap/logging.gif';
import pointMapLogo from '../../assets/pointmap/Logo.jpg';

// DungeonsNDevelopment assets
import DNDLogo from '../../assets/dungeonsNdevelopment/logo.jpeg';

// My Scheduler assets
import schedulerLogo from '../../assets/scheduler/logo.webp';

// SpotifyQL assets
import spotifyqlLogo from '../../assets/spotifyql/logo.png';

// TeslaGames assets
import teslaGamesLogo from '../../assets/teslaGames/logo.jpg'

const projects = [
  {
    title: 'SpotifyQL',
    logo: spotifyqlLogo,
    description: 'A description of the project here, A description of the project here, A description of the project here',
    githublink: 'https://github.com/ChrisMeyer7088/spotifyql',
  },
  {
    title: 'DungeonsNDevelopment',
    logo: DNDLogo,
    description: 'A description of the project here, A description of the project here, A description of the project here',
    githublink: 'https://github.com/Dungeons-Development',
  },
  {
    title: 'TeslaGames',
    logo: teslaGamesLogo,
    description: 'A description of the project here, A description of the project here, A description of the project here',
    isPrivate: true
  },
  {
    title: 'PointMap',
    logo: pointMapLogo,
    imageList: [pointMapClustering, pointMapLogging, pointMapDashboard],
    description: 'A description of the project here, A description of the project here, A description of the project here',
    githublink: 'https://github.com/CECS-491A/NHT-pointMap',
  },
  {
    title: 'My Scheduler',
    logo: schedulerLogo,
    description: 'A description of the project here, A description of the project here, A description of the project here',
    githublink: 'https://github.com/ChrisMeyer7088/My-Scheduler',
  },
];
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState('');
  return (
    <Fade>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h2>Projects I've done</h2>
          <div className={styles.redDivider}></div>
        </div>
        <div className={styles.projects}>
          { projects.map(project => <ProjectItem project={project} key={project.title} selectProject={setSelectedProject} />) }
        </div>
      </div>
      { selectedProject && <ProjectModal selectedProject={selectedProject} /> }
    </Fade>
  )
};

const ProjectItem = ({ project, selectProject }) => {
  return (
    <div className={styles.projectContainer} onClick={ () => selectProject(project.title)}>
      <img className={styles.projectImg} src={project.logo} />
      { project.title }
    </div>
  );
};

const ProjectModal = ({ selectedProject }) => {
  const project = projects.find(project => {
    return project.title === selectedProject
  })
  console.log(project)
  return (
    <div>The Selected project is {project.title}</div>
  )
};
