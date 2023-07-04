import ProductCard from '../components/product-card/product-card';
import { ROW_TOP_GAP } from '../constants';
import { Product } from '../types';

interface RenderFavoriteProductProps {
  index: number;
  style: React.CSSProperties;
}

const generateRenderFavoriteProduct =
  (favorites: Product[]) =>
  // eslint-disable-next-line react/display-name
  ({ index, style }: RenderFavoriteProductProps) => {
    const product = favorites[index];

    const customStyles = {
      ...style,
      top: index === 0 ? style.top : Number(style.top) + index * ROW_TOP_GAP,
    };

    return (
      <ProductCard
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        imgUrl={product.src}
        style={customStyles}
        size="small"
      />
    );
  };

export default generateRenderFavoriteProduct;
