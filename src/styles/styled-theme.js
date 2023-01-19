import { rem } from 'polished';

const theme = {
  colors: {
    white: '#ffffff',
    blue: '#2b86c2',
    black: '#190f06',
    gray: '#808080',
    mediumGray: '#c5c5c5',
    lightGray: '#efefef',
    mediumBlue: '#40a9ff',
  },
  sizes: {
    title: `${rem('28px')}`,
    subTitle: `${rem('18px')}`,
    paragraph: `${rem('16px')}`,
  },
  lineHeight: {
    title: `${rem('31px')}`,
    subTitle: `${rem('23px')}`,
    paragraph: `${rem('19px')}`,
  },
  breakpoints: {
    extraSmall: '375px',
    small: '600px',
    medium: '960px',
    large: '1280px',
  },
};

export default theme;
