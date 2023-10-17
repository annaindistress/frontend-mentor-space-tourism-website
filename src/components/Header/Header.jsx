import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

const links = [
  {
    title: 'Home',
    url: '',
  },
  {
    title: 'Destination',
    url: 'destination',
  },
  {
    title: 'Crew',
    url: 'crew',
  },
  {
    title: 'Technology',
    url: 'technology',
  },
];

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header
      className={`${styles.header} ${isOpenMenu ? styles['header--open'] : ''}`}
    >
      <Link
        className={styles.logo}
        to="/frontend-mentor-space-tourism-website/"
      >
        <img
          src={logo}
          alt="Space tourism logo"
          width="40"
          height="40"
        />
      </Link>
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        {isOpenMenu ? 'Close ' : 'Open '}
        menu
      </button>
      <nav className={styles.navigation}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={`/frontend-mentor-space-tourism-website/${link.url}`}
                end
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
