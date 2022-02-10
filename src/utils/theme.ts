import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
    white: Palette['primary'];
    blue: Palette['primary'];
    green: Palette['primary'];
    purple: Palette['primary'];
    red: Palette['primary'];
  }

  interface PaletteOptions {
    black: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    ipad: true;
  }
}

const createFont = (fontName: string, fontWeight: number, fontUrl: string) => `
  @font-face {
    font-family: ${fontName};
    font-style: normal;
    font-display: swap;
    font-weight: ${fontWeight};
    src: local(${fontName}), url(${fontUrl}) format('opentype');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}`;

const defaultButtonStyles: any = {
  fontFamily: 'FuturaPTBook',
  textTransform: 'none',
  borderRadius: 0,
  boxShadow: 'none',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#030407',
    },
    secondary: {
      main: '#6e7073',
      light: '#b4bfc9',
      contrastText: '#c5cedc',
    },
    blue: {
      main: '#2f80ed',
    },
    green: {
      main: '#219653',
      dark: '#6fcf97',
      light: '#c5ecd6',
    },
    purple: {
      main: '#9B51E0',
    },
    black: {
      main: '#000000',
      dark: '#333333',
    },
    white: {
      main: '#ffffff',
    },
    red: {
      main: '#d92530',
      dark: '#8e0343',
      light: '#E81152',
    },
  },
  typography: {
    fontFamily: ['FuturaPTBook', 'FuturaPTMedium', 'FuturaPTDemi', 'FuturaPTBold'].join(','),
  },
  components: {
    MuiCssBaseline: {
      // styleOverrides: `
      // ${createFont('FuturaPTBook', 400, FuturaPTBook)}
      // ${createFont('FuturaPTMedium', 500, FuturaPTMedium)}
      // ${createFont('FuturaPTDemi', 600, FuturaPTDemi)}
      // ${createFont('FuturaPTBold', 700, FuturaPTBold)}
      // `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      ipad: 767,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});