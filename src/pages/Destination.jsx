import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import styles from './Destination.module.css';

const DestinationPage = () => (
  <Main className="main--destination">
    <PageTitle number="01" title="Pick your destination" />
    <div className={styles.container}></div>
  </Main>
);

export default DestinationPage;
