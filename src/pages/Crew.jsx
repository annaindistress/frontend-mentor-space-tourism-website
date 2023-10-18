import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import styles from './Crew.module.css';

const CrewPage = ({ data }) => (
  <Main className="main--crew">
    <PageTitle number="02" title="Meet your crew" />
    <div className={styles.container}>
      <ul className={styles.navigation}>
        {data.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/crew/${item.name.toLowerCase().replace(' ', '-')}`}
              end
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  </Main>
);

CrewPage.propTypes = {
  data: PropTypes.array,
};

export default CrewPage;
