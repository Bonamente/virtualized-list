import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import {
  addToFavorites,
  removeFromFavorites,
  useStoreState,
} from '../../store/store';

import ZoomableImage from '../zoomable-image/zoomable-image';

import { BASE_URL } from '../../constants';
import { ProductCardProps } from './types';
import styles from './product-card.module.scss';

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imgUrl,
  size,
  style,
}) => {
  const favorites = useStoreState('favorites');
  const isFavorite = favorites.some((product) => product.id === id);

  const handleFavoritesClick = (productId: number) => {
    if (isFavorite) {
      removeFromFavorites(productId);
    } else {
      addToFavorites({
        id: productId,
        name,
        src: imgUrl,
        price,
      });
    }
  };

  const imgSrc = `${BASE_URL}${imgUrl}`;

  return (
    <Card
      className={`${styles.productCard} ${styles[`${size}ProductCard`]}`}
      style={{ ...style }}
    >
      <Box className={`${styles.imgWrapper} ${styles[`${size}ImgWrapper`]}`}>
        {size === 'large' ? (
          <ZoomableImage name={name} imgUrl={imgSrc} />
        ) : (
          <CardMedia
            className={styles.productImg}
            image={imgSrc}
            component="img"
            title={name}
            alt={name}
          />
        )}
      </Box>

      <Stack
        className={`${styles.innerWrapper} ${styles[`${size}InnerWrapper`]}`}
      >
        <CardContent className={styles.cardContent}>
          <Typography
            variant={size === 'large' ? 'h1' : 'h3'}
            className={`${styles[`${size}ProductName`]}`}
          >
            {name}
          </Typography>
        </CardContent>

        <CardActions
          className={`${styles.cardActions} ${styles[`${size}CardActions`]}`}
        >
          <Typography className={`${styles[`${size}ProductPrice`]}`}>
            $ {price}
          </Typography>
          <IconButton
            className={`${styles.favoritesBtn} ${
              styles[`${size}FavoritesBtn`]
            } ${isFavorite ? `${styles.favorite}` : ''} `}
            onClick={(e) => {
              e.preventDefault();
              handleFavoritesClick(id);
            }}
            aria-label="Add to favorites / remove from favorites"
            disableRipple
          />
        </CardActions>
      </Stack>
    </Card>
  );
};

export default ProductCard;
