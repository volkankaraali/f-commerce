const PRIMARY = {
  light: '#22B149',
  main: '#00A24C',
  dark: '#009062',
};
const SECONDARY = {
  lighter: '#7b90f9',
  light: '#7b90f9',
  main: '#5A75F8',
  dark: '#3e51ad',
  darker: '#3e51ad',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const palette = {
  light: {
    mode: 'light',
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    grey: { ...GREY },

  },
  dark: {
    mode: 'dark',
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    grey: { ...GREY },

  },
};

export default palette;