import { useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Box, Stack, Typography } from '@mui/material';
import { useStoreState } from '../../store/store';
import generateRenderFavoriteProduct from '../../lib/generateRenderFavoriteProduct';

import { FavoriteProductSize } from '../../types';
import styles from './favorites.module.scss';

const Favorites = () => {
  const favorites = useStoreState('favorites');
  const renderProduct = useCallback(generateRenderFavoriteProduct(favorites), [
    favorites,
  ]);

  return (
    <Box className={styles.favorites}>
      <Typography variant="h2" className={styles.favoritesTitle}>
        Favorites
      </Typography>

      <Stack className={styles.favoritesWrapper}>
        {favorites.length < 1 ? (
          <Typography variant="h3" className={styles.favoritesSubTitle}>
            No favorites yet
          </Typography>
        ) : (
          <Box className={styles.favoritesList}>
            <AutoSizer>
              {({ width, height }: FavoriteProductSize) => (
                <List
                  height={height}
                  itemCount={favorites.length}
                  itemSize={130}
                  width={width}
                >
                  {renderProduct}
                </List>
              )}
            </AutoSizer>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Favorites;
