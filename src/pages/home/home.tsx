import { Box } from '@mui/material';
import ProductList from '../../components/product-list/product-list';
import styles from './home.module.scss';

const Home = () => {
  return (
    <Box className={styles.homePage}>
      <ProductList />
    </Box>
  );
};

export default Home;
