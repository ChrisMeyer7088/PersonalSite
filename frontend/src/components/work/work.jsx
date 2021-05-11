import { useState } from 'react';
import { Fade } from '../fade/fade.jsx';

import styles from './work.scss';

export const Work = ({isMobile}) => {
  const [workList, setWorkList] = useState([
    {
      title: 'Applied Medical',
      position: {
          title: 'Software Engineer',
          startDate: 'November 2019',
          endDate: 'Present',
      },
      bullets: [
        'Advise and coordinate with multiple teams in handling user requirements',
        'Worked with UI/UX team in designing and creating robust custom features',
        'Implemented project CI/CD pipeline utilizing Gitlab runners',
        'Setup database versioning control tool Flyway for SQL migration scripts',
        'Deployed and managed microservice architecture for delivering course content',
      ],
    },
    {
      title: 'General Atomics',
      position: {
          title: 'Cyber Engineering Intern',
          startDate: 'May 2019',
          endDate: 'June 2019',
      },
      bullets: [
        'Created Bash shell scripts for automatically hardening RedHat and Windows 10 operating systems',
        'Designed procedures and scripts for vetting systems for vulnerabilities with Nessus',
        'Performed resource and budgeting for a new pen testing lab',
        'Documented action plans for handling discovered system vulnerabilities',
      ],
    },
    {
      title: 'TJCAA',
      position: {
          title: 'Engineering Intern',
          startDate: 'May 2018',
          endDate: 'June 2018',
      },
      bullets: [
        'Developed program in VBA that automated time-consuming calculations for a conduit schedule',
        'Assisted in creating a Supervisory Control and Data Acquisition software package for a water treatment plant using Ignition',
        'Created program for auto importing and formating AutoCAD data with excel',
      ],
    }
  ]);
  const [selectedWork, setSelectedWork] = useState('Applied Medical')

  return (
    <Fade>
      <div className={styles.workContainer}>
        <div className={styles.workHeader}>
          <h2>Places I've worked</h2>
          <div className={styles.redDivider}></div>
        </div>
        <ol className={styles.workList}>
          { workList.map(work => {
            const { title } = work
            let selected = selectedWork === work.title ? styles.selected : '';
            return (
              <div key={title}>
                <li
                  className={selected}
                  onClick={ () => setSelectedWork(title)}
                  >
                  {title}
                </li>
                <div className={styles.listBorder}>
                  <div className={selected}></div>
                </div>
              </div>
            );
          }) }
        </ol>
        <div className={styles.itemContainer}>
          { workList.map(work => <WorkItem key={work.title} work={work} selectedWork={selectedWork} />) }
        </div>
      </div>
    </Fade>
  );
};

const WorkItem = ({ work, selectedWork }) => {
  const { title, startDate, endDate } = work.position
  const selected = selectedWork === work.title ? styles.visible : '';
  return (
    <div className={`${selected} ${styles.workItem}`}>
      <div className={styles.position}>
        <div className={styles.title}>{title} <span>@ {work.title}</span></div>
        <div className={styles.dateContainer}>
          <span>{startDate}</span>
          <span className={styles.hyphen}>-</span>
          <span>{endDate}</span>
        </div>
      </div>
      <div>
        {work.bullets.map(bullet => <div className={styles.bullet} key={bullet}><span>{`>`}</span>{bullet}</div>)}
      </div>
    </div>
  );
};
