import styles from './projects.scss';
import { Fade } from '../fade/fade.jsx';
import { useRef, useState, useEffect } from 'react';

const githubIcon = 'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/General/githubIcon.png';

const projects = [
  {
    title: 'PointMap',
    logo: 'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/PointMap/Logo.jpg',
    imageList: ['https://professional.sfo3.digitaloceanspaces.com/PersonalSite/PointMap/clustering.gif',
      'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/PointMap/logging.gif',
      'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/PointMap/adminDashboard.gif'],
    description: <div>
      <p className={styles.infoP}>PointMap is a geospatial mapping tool that allows users to create points of interest. The project consists of several micorservices including:</p>
      <ul className={styles.infoList}>
        <li>A clientside SPA built with the Vue framework that utilizes the Google Maps API for the clustering and placement of points.</li>
        <li>The authorization and data access server built using .NET Core and is connected to a MYSQL database using the hibernate ORM.</li>
        <li>A GraphQL logging server that retrieves logs stored in MongoDB to create queries that allow administrators to view useful analytics.</li>
      </ul>
    </div>,
    githublink: 'https://github.com/CECS-491A/NHT-pointMap',
  },
  {
    title: 'SpotifyQL',
    logo: 'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/SpotifyQL/logo.png',
    imageList: ['https://professional.sfo3.digitaloceanspaces.com/PersonalSite/SpotifyQL/schema.gif',
      'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/SpotifyQL/mutations.gif',
      'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/SpotifyQL/query.gif'],
    description: <div>
      <p className={styles.infoP}>SpotifyQL is a GraphQL intermediary layer for the Spotify API, the application features:</p>
      <ul className={styles.infoList}>
        <li>Maps all of Spotify's objects into a graphql schema.</li>
        <li>Facilitates Spotify's client credential authorization flow for easy authorization.</li>
        <li>Provides a complete set of queries and mutations to their respective Spotify endpoints.</li>
      </ul>
    </div>,
    githublink: 'https://github.com/ChrisMeyer7088/spotifyql',
  },
  {
    title: 'TeslaGames',
    logo: 'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/Teslagames/logo.jpg',
    imageList: ['https://professional.sfo3.digitaloceanspaces.com/PersonalSite/Teslagames/room.gif',
      'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/Teslagames/hand.gif'],
    description: <div>
      <p className={styles.infoP}>
        TeslaGames is a web application that handles state management between client and server using websockets. Its structure is a room,
        client and host paradigm. The main application:
      </p>
      <ul className={styles.infoList}>
        <li>Manages and tracks the room state to ensure the game flows smoothly across all clients.</li>
        <li>Uses a heartbeat to detect when a client has disconnected or is attempting to reconnect.</li>
        <li>Determines the allowed actions a client can perform on their selected game.</li>
      </ul>
    </div>,
  },
  {
    title: 'DungeonsNDevelopment',
    logo: 'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/DungeonsNDevelopment/logo.jpeg',
    imageList: ['https://professional.sfo3.digitaloceanspaces.com/PersonalSite/DungeonsNDevelopment/textRendering.gif',
      'https://professional.sfo3.digitaloceanspaces.com/PersonalSite/DungeonsNDevelopment/htmlRendering.gif'],
    description: <div>
      <p className={styles.infoP}>
        Dungeons N Development is an organization created for building useful free-to-use web applications for DND. 
        The project we are currently working on is a letter creator, which performs the following:
      </p>
      <ul className={styles.infoList}>
        <li>Uses TinyMCE to allow the user to easily create and export letters to html.</li>
        <li>Converts and sanitizes the artifact's HTML then renders it using a shadowDom for encapsulation.</li>
        <li>Makes use of TinyMCE's plugin import system to allow for customization options.</li>
      </ul>
    </div>,
    githublink: 'https://github.com/Dungeons-Development',
  },
];

export const Projects = ({ isMobile }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectClass = `${styles.fade} ${selectedProject ? styles.visible : ''}`
  const projectModalEle = isMobile ? <ProjectModalMobile project={selectedProject} selectProject={setSelectedProject} /> :
    <ProjectModal project={selectedProject} selectProject={setSelectedProject} />

  return (
    <Fade>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h2>A few projects I've done</h2>
          <div className={styles.redDivider}></div>
        </div>
        <div className={styles.projects}>
          { projects.map(project => <ProjectItem project={project} key={project.title} selectProject={setSelectedProject} />) }
        </div>
      </div>
      <div className={projectClass}>
        { selectedProject && projectModalEle }
      </div>
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
        <h3>
          {project.title}
          { project.githublink && <a href={`${project.githublink}`} target="_blank"><img className={styles.gitIcon} src={githubIcon} /></a>}
        </h3>
        <div className={styles.modalDesc}>{project.description}</div>
      </div>
    );
  }
  return (
    <img className={styles.modalImg} src={project.imageList[index - 1]} />
  );
};

const ProjectModalMobile = ({ project, selectProject={selectProject} }) => {
  return (
    <div className={styles.mobileModal}>
      <div className={styles.closeModal} onClick={() => selectProject(null)}>{'\u2717'}</div>
      <div className={styles.mobileContainer}>
        <h3>
          {project.title}
          { project.githublink && <a href={`${project.githublink}`} target="_blank"><img className={styles.gitIcon} src={githubIcon} /></a>}
        </h3>
        <div className={styles.modalDesc}>{project.description}</div>
      </div>
    </div>
  );
}

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
