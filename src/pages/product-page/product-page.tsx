import { useParams } from 'react-router-dom';
import { useFetch } from 'usehooks-ts';

import { Stack } from '@mui/material';
import ProductCard from '../../components/product-card/product-card';

import { Product } from '../../types';
import { BASE_URL } from '../../constants';
import styles from './product-page.module.scss';

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, error } = useFetch<Product>(
    `${BASE_URL}/image/?id=${id}`
  );

  if (error) return <p className={styles.message}>There is an error</p>;
  if (!product) return <p className={styles.message}>Loading...</p>;

  return (
    <Stack className={styles.productPage}>
      <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        imgUrl={product.src}
        size="large"
      />
    </Stack>
  );
};

export default ProductPage;
