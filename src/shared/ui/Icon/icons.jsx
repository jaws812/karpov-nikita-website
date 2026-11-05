export const svgItems = {
  arrowTopRight: {
    draw: (
      <g strokeWidth='2' strokeMiterlimit='10'>
        <path d='M20,12v7c0,0.552-0.448,1-1,1H5c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h7' />
        <polyline points='20,10 20,4 14,4 ' />
        <line x1='20' y1='4' x2='9' y2='15' />
      </g>
    ),
    viewBox: '0 0 24 24',
  },
  arrowRight: {
    draw: (
      <g strokeLinecap='round' strokeLinejoin='miter'>
        <polyline points='13 17 18 12 13 7'></polyline>
        <line x1='6' y1='12' x2='18' y2='12'></line>
      </g>
    ),
    viewBox: '0 0 24 24',
  },
  arrowRightCard: {
    draw: (
      <g strokeLinecap='round' strokeLinejoin='miter'>
        <path
          d='M11.6667 11.6667H28.3334V28.3334'
          strokeWidth='3.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.6667 28.3334L28.3334 11.6667'
          strokeWidth='3.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    ),
    viewBox: '0 0 40 40',
  },
  telegram: {
    draw: (
      <g strokeLinecap='round' strokeLinejoin='miter'>
        <path
          d='M33.9173 50.6007C34.006 50.8216 34.1601 51.0102 34.359 51.141C34.5578 51.2718 34.792 51.3386 35.03 51.3325C35.2679 51.3264 35.4983 51.2477 35.6903 51.1069C35.8822 50.9661 36.0264 50.7699 36.1037 50.5447L51.2703 6.21138C51.345 6.00463 51.3593 5.7809 51.3114 5.56634C51.2636 5.35179 51.1556 5.1553 51.0002 4.99986C50.8447 4.84443 50.6483 4.73647 50.4337 4.68863C50.2191 4.64079 49.9954 4.65504 49.7887 4.72972L5.45533 19.8964C5.23015 19.9736 5.03399 20.1179 4.89316 20.3098C4.75234 20.5017 4.67359 20.7321 4.6675 20.9701C4.6614 21.2081 4.72825 21.4422 4.85906 21.6411C4.98988 21.84 5.1784 21.9941 5.39933 22.0827L23.9027 29.5027C24.4876 29.7369 25.019 30.0871 25.465 30.5323C25.9109 30.9774 26.2621 31.5082 26.4973 32.0927L33.9173 50.6007Z'
          strokeWidth='4.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M50.9927 5.00977L25.466 30.5341'
          strokeWidth='4.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    ),
    viewBox: '0 0 56 56',
  },
  email: {
    draw: (
      <g strokeLinecap='round' strokeLinejoin='miter'>
        <path
          d='M26.6666 5.33325H5.33329C3.86053 5.33325 2.66663 6.52716 2.66663 7.99992V23.9999C2.66663 25.4727 3.86053 26.6666 5.33329 26.6666H26.6666C28.1394 26.6666 29.3333 25.4727 29.3333 23.9999V7.99992C29.3333 6.52716 28.1394 5.33325 26.6666 5.33325Z'
          strokeWidth='2.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M29.3333 9.33325L17.3733 16.9333C16.9617 17.1912 16.4857 17.3279 16 17.3279C15.5142 17.3279 15.0383 17.1912 14.6266 16.9333L2.66663 9.33325'
          strokeWidth='2.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    ),
    viewBox: '0 0 32 32',
  },
  document: {
    draw: (
      <g strokeLinecap='round' strokeLinejoin='miter'>
        <path
          d='M17.5 2.33337H6.99996C6.38112 2.33337 5.78763 2.57921 5.35004 3.01679C4.91246 3.45438 4.66663 4.04787 4.66663 4.66671V23.3334C4.66663 23.9522 4.91246 24.5457 5.35004 24.9833C5.78763 25.4209 6.38112 25.6667 6.99996 25.6667H21C21.6188 25.6667 22.2123 25.4209 22.6499 24.9833C23.0875 24.5457 23.3333 23.9522 23.3333 23.3334V8.16671L17.5 2.33337Z'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.3334 2.33337V7.00004C16.3334 7.61888 16.5792 8.21237 17.0168 8.64996C17.4544 9.08754 18.0479 9.33337 18.6667 9.33337H23.3334'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14 21V14'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.5 17.5L14 21L17.5 17.5'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    ),
    viewBox: '0 0 28 28',
  },
  github: {
    draw: (
      <g strokeLinecap='round' strokeLinejoin='miter'>
        <path
          d='M17.5 25.6666V20.9999C17.6623 19.5384 17.2432 18.0717 16.3333 16.9166C19.8333 16.9166 23.3333 14.5833 23.3333 10.4999C23.4266 9.04159 23.0183 7.60659 22.1666 6.41659C22.4933 5.07492 22.4933 3.67492 22.1666 2.33325C22.1666 2.33325 21 2.33325 18.6666 4.08325C15.5866 3.49992 12.4133 3.49992 9.3333 4.08325C6.99996 2.33325 5.8333 2.33325 5.8333 2.33325C5.4833 3.67492 5.4833 5.07492 5.8333 6.41659C4.98381 7.60178 4.57151 9.04484 4.66663 10.4999C4.66663 14.5833 8.16663 16.9166 11.6666 16.9166C11.2116 17.4883 10.8733 18.1416 10.675 18.8416C10.4766 19.5416 10.4183 20.2766 10.5 20.9999V25.6666'
          strokeWidth='2.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.5 21.0001C5.23837 23.3334 4.66671 18.6667 2.33337 18.6667'
          strokeWidth='2.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    ),
    viewBox: '0 0 28 28',
  },
}
