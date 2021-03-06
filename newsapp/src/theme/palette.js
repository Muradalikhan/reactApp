import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#EEEEEE',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#ACB0B6',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

const PRIMARY = {
  lighter: '#dce775',
  light: '#d4e157',
  main: '#cddc39',
  dark: '#c0ca33',
  darker: '#afb42b',
  contrastText: '#000'

};
const SECONDARY = {
  lighter: '#4db6ac',
  light: '#26a69a',
  main: '#009688',
  dark: '#00897b',
  darker: '#00796b',
  contrastText: '#fff'
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#5f9bff',
  main: '#2447EF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff'
};
const SUCCESS = {
  lighter: '#28fc86',
  light: '#22e377',
  main: '#1BD66D',
  dark: '#19bd61',
  darker: '#159e51',
  contrastText:'#fff'
};
const WARNING = {
  lighter: '#fa9846',
  light: '#FEAD47',
  main: '#FF8219',
  dark: '#ed740e',
  darker: '#d46304',
  contrastText: '#fff'
};
const ERROR = {
  lighter: '#8900c3',
  light: '#8900e1',
  main: '#D034Dc',
  dark: '#7B1FA2',
  darker: '#6A1B9A',
  contrastText: '#fff'
};
const YELLOW = {
  light: '#FDF09E',
  main: '#FFCA18',
  contrastText: '#000'
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  yellow: createGradient(YELLOW.light, YELLOW.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  yellow:{...YELLOW},
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

export default palette;
