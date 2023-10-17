import { Link } from 'react-router-dom';
import Main from '../components/Main';
import styles from './Home.module.css';

const HomePage = () => (
  <Main className="main--home">
    <div className={styles.container}>
      <h1 className="sr-only">Space tourism website</h1>
      <p className={styles.lead}>
        So, you want to travel to
        <span className={styles.important}>space</span>
      </p>
      <p className={styles.text}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Link
        className={styles.link}
        to="/frontend-mentor-space-tourism-website/destination"
      >
        Explore
      </Link>
    </div>
  </Main>
);

export default HomePage;
