import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import styles from './not-found.module.scss';

const NotFoundPage = () => {
  return (
    <Container className={styles.container}>
      <main className={styles.notFound}>
        <Typography
          variant="h1"
          sx={{ mb: 4, pt: 6, textAlign: 'center' }}
          className={styles.title}
        >
          The page you requested could not be found
        </Typography>
        <Link className={styles.link} to="/">
          Back home
        </Link>
      </main>
    </Container>
  );
};

export default NotFoundPage;
