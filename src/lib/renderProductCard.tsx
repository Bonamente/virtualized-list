import ProductCard from '../components/product-card/product-card';
import { CardSize, Product } from '../types';

const renderProductCard = (product: Product, size: CardSize) => {
  return (
    <ProductCard
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      imgUrl={product.src}
      size={size}
    />
  );
};

export default renderProductCard;
