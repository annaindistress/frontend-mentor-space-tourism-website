import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import styles from './Technology.module.css';

const TechnologyPage = () => (
  <Main className="main--technology">
    <PageTitle number="03" title="Space launch 101" />
    <div className={styles.container}></div>
  </Main>
);

export default TechnologyPage;
