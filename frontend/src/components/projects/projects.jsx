import styles from './projects.scss';
import { Fade } from '../fade/fade.jsx';
import { useRef, useState, useEffect } from 'react';

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
  const [selectedProject, setSelectedProject] = useState(null);
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
      { selectedProject && <ProjectModal project={selectedProject} selectProject={setSelectedProject} /> }
    </Fade>
  )
};

const ProjectItem = ({ project, selectProject }) => {
  return (
    <div className={styles.projectContainer} onClick={ () => selectProject(project)}>
      <img className={styles.projectImg} src={project.logo} />
      { project.title }
    </div>
  );
};

const ProjectModal = ({ project, selectProject }) => {
  const modalRef = useRef();
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();
  useOutsideAlerter([modalRef, leftArrowRef, rightArrowRef], selectProject);
  const maxIndex = getMaxindex(project);
  const [index, setIndex] = useState(maxIndex);
  return (
    <div className={styles.projectModal}>
      <div ref={leftArrowRef} className={styles.modalArrow} onClick={() => {
          if (index - 1 < 1) {
            setIndex(maxIndex);
          } else {
            setIndex(index - 1);
          }
        }}
      >
        {'\u276e'}
      </div>
      <div ref={modalRef} className={styles.modalContent}>
        { index === maxIndex && <div className={styles.closeModal} onClick={() => selectProject(null)}>{'\u2717'}</div>}
        <ModalContent project={project} index={index} maxIndex={maxIndex} />
      </div>
      <div ref={rightArrowRef} className={styles.modalArrow} onClick={() => {
        if (index + 1 > maxIndex) {
          setIndex(1);
        } else {
          setIndex(index + 1)
        }
        }}
      >
        {'\u276f'}
      </div>
    </div>
  );
};

const ModalContent = ({ index, project, maxIndex }) => {
  if (maxIndex === index) {
    return (
      <div className={styles.modalInfo}>
        <h3>{project.title}</h3>
        <div className={styles.modalDesc}>{project.description}</div>
      </div>
    );
  }
  return (
    <img className={styles.modalImg} src={project.imageList[index - 1]} />
  );
};

function useOutsideAlerter(refs, selectProject) {
  useEffect(() => {
    function handleClickOutside(event) {
      let found = false
      refs.forEach(ref => {
        if (ref.current && ref.current.contains(event.target)) {
          found = true;
        }
      })
      if (!found) selectProject(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs]);
}

function getMaxindex (project) {
  return project.imageList ? project.imageList.length + 1 : 1;
}
