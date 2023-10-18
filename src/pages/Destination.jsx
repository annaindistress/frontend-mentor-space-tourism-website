import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import styles from './Destination.module.css';

const DestinationPage = ({ data }) => (
  <Main className="main--destination">
    <PageTitle number="01" title="Pick your destination" />
    <div className={styles.container}>
      <ul className={styles.navigation}>
        {data.map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/destination/${item.name.toLowerCase()}`}
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

DestinationPage.propTypes = {
  data: PropTypes.array,
};

export default DestinationPage;
