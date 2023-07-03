import { CardSize } from '../../types';

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  size: CardSize;
  style?: React.CSSProperties;
}
