import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './TechnologyItem.module.css';

const TechnologyItem = ({ data }) => {
  const params = useParams();
  const current = data.find(
    item => item.name.toLowerCase().replace(' ', '-') === params.technologyItem
  );

  return (
    <>
      <h2 className={styles.title}>{current.name}</h2>
      <p className={styles.description}>{current.description}</p>
      <picture className={styles.image}>
        <source
          media="(min-width: 1200px)"
          srcSet={`/frontend-mentor-space-tourism-website${current.images.portrait}`}
        />
        <img
          src={`/frontend-mentor-space-tourism-website${current.images.landscape}`}
          width="374"
          height="170"
          alt={`${current.name}'s image`}
        />
      </picture>
    </>
  );
};

TechnologyItem.propTypes = {
  data: PropTypes.array,
};

export default TechnologyItem;
