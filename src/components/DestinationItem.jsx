import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './DestinationItem.module.css';

const DestinationItem = ({ data }) => {
  const params = useParams();
  const current = data.find(
    item => item.name.toLowerCase() === params.destination
  );

  return (
    <>
      <h2 className={styles.title}>{current.name}</h2>
      <p className={styles.description}>{current.description}</p>
      <picture className={styles.image}>
        <source
          type="image/webp"
          srcSet={`/frontend-mentor-space-tourism-website${current.images.webp}`}
        />
        <img
          src={`/frontend-mentor-space-tourism-website${current.images.png}`}
          width="170"
          height="170"
          alt={`${current.name}'s image`}
        />
      </picture>
      <dl className={styles.list}>
        <div>
          <dt>Avg. distance</dt>
          <dd>{current.distance}</dd>
        </div>
        <div>
          <dt>Est. travel time</dt>
          <dd>{current.travel}</dd>
        </div>
      </dl>
    </>
  );
};

DestinationItem.propTypes = {
  data: PropTypes.array,
};

export default DestinationItem;
