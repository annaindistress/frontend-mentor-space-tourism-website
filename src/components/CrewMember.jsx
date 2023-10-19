import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './CrewMember.module.css';

const CrewMember = ({ data }) => {
  const params = useParams();
  const current = data.find(
    item => item.name.toLowerCase().replace(' ', '-') === params.crewMember
  );

  return (
    <>
      <h2 className={styles.name}>{current.name}</h2>
      <p className={styles.role}>{current.role}</p>
      <p className={styles.about}>{current.bio}</p>
      <picture className={styles.image}>
        <source
          type="image/webp"
          srcSet={`/frontend-mentor-space-tourism-website${current.images.webp}`}
        />
        <img
          src={`/frontend-mentor-space-tourism-website${current.images.png}`}
          height="222"
          alt={`${current.name}'s image`}
        />
      </picture>
    </>
  );
};

CrewMember.propTypes = {
  data: PropTypes.array,
};

export default CrewMember;
