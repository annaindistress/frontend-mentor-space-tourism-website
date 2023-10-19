import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import styles from './Technology.module.css';

const TechnologyPage = ({ data }) => (
  <Main className="main--technology">
    <PageTitle number="03" title="Space launch 101" />
    <div className={styles.container}>
      <ul className={styles.navigation}>
        {data.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/technology/${item.name.toLowerCase().replace(' ', '-')}`}
              end
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <p className={styles.subtitle}>The terminology...</p>
      <Outlet />
    </div>
  </Main>
);

TechnologyPage.propTypes = {
  data: PropTypes.array,
};

export default TechnologyPage;
