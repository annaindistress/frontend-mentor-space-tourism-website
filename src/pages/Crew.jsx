import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import styles from './Crew.module.css';

const CrewPage = () => (
  <Main className="main--crew">
    <PageTitle number="02" title="Meet your crew" />
    <div className={styles.container}></div>
  </Main>
);

export default CrewPage;
