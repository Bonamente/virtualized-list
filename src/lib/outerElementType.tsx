/* eslint-disable no-useless-return */
/* eslint-disable react/display-name */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useScroll } from '@use-gesture/react';
import { forwardRef, useRef } from 'react';

const emptyFunction = (): void => {
  return;
};

type DocumentPropsType = React.HTMLProps<HTMLElement>;

const outerElementType = forwardRef<HTMLElement, DocumentPropsType>(
  ({ onScroll, children }, forwardedRef) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useScroll(
      () => {
        if (!(onScroll instanceof Function)) {
          return;
        }

        const {
          clientWidth,
          clientHeight,
          scrollLeft,
          scrollTop,
          scrollHeight,
          scrollWidth,
        } = document.documentElement;

        if (onScroll != null) {
          onScroll({
            currentTarget: {
              clientHeight,
              clientWidth,
              scrollLeft,
              addEventListener: emptyFunction,
              removeEventListener: emptyFunction,
              dispatchEvent: () => false,
              scrollTop:
                scrollTop -
                (containerRef.current
                  ? containerRef.current.getBoundingClientRect().top + scrollTop
                  : 0),
              scrollHeight,
              scrollWidth,
            },
          } as unknown as React.UIEvent<HTMLElement>);
        }
      },
      { target: window }
    );

    if (forwardedRef != null && !(forwardedRef instanceof Function)) {
      // eslint-disable-next-line no-param-reassign
      forwardedRef.current = document.documentElement;
    }

    return (
      <div ref={containerRef} style={{ position: 'relative' }}>
        {children}
      </div>
    );
  }
);

export default outerElementType;
