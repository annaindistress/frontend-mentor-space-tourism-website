import PropTypes from 'prop-types';
import styles from './Main.module.css';

const Main = ({ className = '', children }) => (
  <main
    className={`${styles.main} ${
      className !== '' ? styles[`${className}`] : ''
    }`}
  >
    {children}
  </main>
);

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Main;
