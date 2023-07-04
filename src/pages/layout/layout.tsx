import { Outlet, useLocation } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';

import styles from './layout.module.scss';

const Layout = () => {
  const { pathname } = useLocation();
  const headerTitle = pathname === '/' ? 'Product list page' : 'Product page';

  return (
    <>
      <Header title={headerTitle} />
      <Stack className={styles.wrapper}>
        <Box className={styles.wrapper2}>
          <Stack className={styles.container}>
            <aside className={styles.aside}>
              <Box className={styles.favoritesContainer}>
                <Favorites />
              </Box>
            </aside>
            <main className={styles.main}>
              <Outlet />
            </main>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Layout;
