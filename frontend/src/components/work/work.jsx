import { useState } from 'react';

import styles from './work.scss';

export const Work = () => {
  [workList, setWorkList] = useState([
    {
      title: 'Applied Medical',
      positions: [
        {
          title: 'Software Engineer II',
          startDate: 'August 2020',
          endDate: 'Present',
        },
        {
          title: 'Software Engineer I',
          startDate: 'Nov 2019',
          endDate: 'August 2020',
        }
      ],
      bullets: [
        'Bullet One',
        'Bullet Two',
        'Bullet Three',
      ],
    },
    {
      title: 'General Atomics',
      positions: [
        {
          title: 'Cyber Security Engineering Intern',
          startDate: 'May 2019',
          endDate: 'June 2019',
        },
      ],
      bullets: [
        'Bullet One',
        'Bullet Two',
        'Bullet Three',
      ],
    },
    {
      title: 'TJCAA',
      positions: [
        {
          title: 'Engineering Intern',
          startDate: 'May 2018',
          endDate: 'June 2018',
        },
      ],
      bullets: [
        'Bullet One',
        'Bullet Two',
        'Bullet Three',
      ],
    }
  ]);
  
  return (
    <div className={styles.workContainer}>
      <div className={styles.workHeader}>
        <h2>Places I've worked</h2>
        <div className={styles.redDivider}></div>
      </div>
      <div>
        { workList.map(work => <WorkItem key={work.title} work={work} />) }
      </div>
    </div>
  );
};

const WorkItem = ({ work }) => {
  return (
    <div >
      <h2>{work.title}</h2>
      <div>
        { work.positions.map(position => {
          return (
            <div key={position.title}>
              <div>{position.title}</div>
              <div>
                <span>{position.startDate}</span>
                <span>-</span>
                <span>{position.endDate}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};