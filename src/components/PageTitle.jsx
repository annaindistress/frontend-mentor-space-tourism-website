import PropTypes from 'prop-types';
import styles from './PageTitle.module.css';

const PageTitle = ({ number, title }) => (
  <h1 className={styles.title}>
    <span className={styles.number}>{number}</span>
    {title}
  </h1>
);

PageTitle.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
};

export default PageTitle;
