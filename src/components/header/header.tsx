import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { HeaderProps } from './types';
import styles from './header.module.scss';

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <AppBar position="relative" className={styles.appBar}>
      <Container className={styles.container}>
        <Toolbar className={styles.toolbar}>
          <div className={styles.cube} />
          <Typography variant="h1" className={styles.title}>
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
