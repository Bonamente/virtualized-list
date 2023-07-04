import { Link } from 'react-router-dom';
import { useFetch } from 'usehooks-ts';
import { Box } from '@mui/material';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import outerElementType from '../../lib/outerElementType';
import getColumnCount from '../../lib/getColumnCount';
import renderProductCard from '../../lib/renderProductCard';

import { Product, ProductSize } from '../../types';
import {
  CELL_WIDTH,
  CELL_HEIGHT,
  CELL_TOP_GAP,
  CELL_GAP,
  BASE_URL,
} from '../../constants';

import styles from './product-list.module.scss';

const ProductList = () => {
  const { data: products, error } = useFetch<Product[]>(`${BASE_URL}/image`);

  if (error) return <p className={styles.message}>There is an error</p>;
  if (!products) return <p className={styles.message}>Loading...</p>;

  return (
    <Box className={styles.productList}>
      <AutoSizer>
        {({ width }: ProductSize) => {
          const columnCount = getColumnCount(width);
          const rowCount = Math.ceil(products.length / columnCount);
          const columnWidth = CELL_WIDTH;
          const rowHeight = CELL_HEIGHT;
          const totalHeight = window.innerHeight + rowHeight * rowCount;

          return (
            <Grid
              columnCount={columnCount}
              columnWidth={columnWidth}
              height={totalHeight}
              rowCount={rowCount}
              outerElementType={outerElementType}
              rowHeight={rowHeight}
              width={width}
            >
              {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * columnCount + columnIndex;
                const product = products[index];

                const customStyles = {
                  ...style,
                  left:
                    columnIndex === 0
                      ? style.left
                      : Number(style.left) + columnIndex * CELL_GAP,
                  right:
                    columnIndex === columnCount
                      ? style.right
                      : Number(style.right) + columnIndex * CELL_GAP,
                  top:
                    rowIndex === 0
                      ? style.top
                      : Number(style.top) + rowIndex * CELL_TOP_GAP,
                };

                if (!product) return null;

                return (
                  <Box key={product.id} style={customStyles}>
                    <Link className={styles.link} to={`/product/${product.id}`}>
                      {renderProductCard(product, 'medium')}
                    </Link>
                  </Box>
                );
              }}
            </Grid>
          );
        }}
      </AutoSizer>
    </Box>
  );
};

export default ProductList;
