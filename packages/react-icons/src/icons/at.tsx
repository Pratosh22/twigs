import React from 'react';
import { IconProps } from '../types';

export const AtIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M22.6667 28H16C13.6266 28 11.3066 27.2962 9.33316 25.9776C7.35977 24.6591 5.8217 22.7849 4.91345 20.5922C4.0052 18.3995 3.76756 15.9867 4.23058 13.6589C4.6936 11.3311 5.83649 9.19295 7.51472 7.51472C9.19295 5.83649 11.3312 4.6936 13.6589 4.23057C15.9867 3.76755 18.3995 4.00519 20.5922 4.91344C22.7849 5.82169 24.6591 7.35977 25.9776 9.33316C27.2962 11.3065 28 13.6266 28 16V18C28 18.8841 27.6488 19.7319 27.0237 20.357C26.3986 20.9821 25.5507 21.3333 24.6667 21.3333C23.7826 21.3333 22.9348 20.9821 22.3096 20.357C21.6845 19.7319 21.3333 18.8841 21.3333 18V16C21.3333 14.5855 20.7714 13.229 19.7712 12.2288C18.771 11.2286 17.4145 10.6667 16 10.6667V10.6667C14.9452 10.6667 13.914 10.9795 13.037 11.5655C12.1599 12.1515 11.4763 12.9845 11.0726 13.959C10.669 14.9336 10.5634 16.0059 10.7692 17.0405C10.9749 18.075 11.4829 19.0254 12.2288 19.7712C12.9746 20.5171 13.925 21.0251 14.9595 21.2309C15.9941 21.4366 17.0664 21.331 18.041 20.9274C19.0155 20.5237 19.8485 19.8401 20.4345 18.963C21.0205 18.086 21.3333 17.0548 21.3333 16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);