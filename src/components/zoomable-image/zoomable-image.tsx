import ReactImageMagnify from 'react-image-magnify';
import { Box } from '@mui/material';

import { ZoomableImageProps } from './types';
import styles from './zoomable-image.module.scss';

const ZoomableImage: React.FC<ZoomableImageProps> = ({ name, imgUrl }) => (
  <ReactImageMagnify
    {...{
      smallImage: {
        alt: name,
        src: imgUrl,
        isFluidWidth: true,
      },
      imageClassName: `${styles.productImg}`,
      largeImage: {
        src: imgUrl,
        width: 650,
        height: 650,
      },
      enlargedImageClassName: `${styles.largeProductImg}`,
      enlargedImageContainerDimensions: {
        width: '135%',
        height: '115%',
      },
      isHintEnabled: true,
      isActivatedOnTouch: true,
      shouldHideHintAfterFirstActivation: false,

      // eslint-disable-next-line react/no-unstable-nested-components
      hintComponent: () => (
        <Box className={styles.magnifier} aria-hidden="true">
          <img src="/icons/magnifier-icon.svg" alt="magnifier" />
        </Box>
      ),
    }}
  />
);

export default ZoomableImage;
