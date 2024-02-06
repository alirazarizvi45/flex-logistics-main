import { createTheme, responsiveFontSizes } from "@mui/material";
let theme = createTheme({
  palette: {
    success: {
      main: '#F2B705',
    },
    primary: {
      main: '#F2B705',
    },
    customBlack: {
      main: '#0C0F15',
    },
    customWhite: {
      main: '#FFFFFF',
    },
    bitter: {
      main: '#262B26',
    },
  },
  typography: {
    h1: {
      fontFamily: ['Noto Sans'].join(','),
      color: '#fff',
      fontSize: '4.4 rem', //70px
      fontWeight: 600,
    },
    h2: {
      fontFamily: ['Noto Sans'].join(','),
      color: '#fff',
      fontSize: '2.3 rem', //38px
      fontWeight: 600,
    },
    h3: {
      fontFamily: ['Noto Sans'].join(','),
      color: '#fff',
      fontSize: '2 rem',
      fontWeight: 700,
    },
    h4: {
      fontFamily: ['Noto Sans'].join(','),
      color: '#ffffff',
      fontSize: '1.25 rem',
      fontWeight: 600,
    },
    h5: {
      fontFamily: ['Noto Sans'].join(','),
      color: '#fff',
      fontSize: '1 rem',
      fontWeight: 400,
    },
    h6: {
      fontFamily: ['Inter'].join(','),
      color: '#000000',
      fontSize: '1 rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: ['Inter'].join(','),
      fontWeight: 400,
      color: 'white',
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontFamily: ['Inter'].join(','),
      fontWeight: 400,
      color: 'white',
      fontSize: '1rem',
      lineHeight: 1.025,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontFamily: ['Inter'].join(','),
      fontWeight: 400,
      color: 'white',
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: ['Inter'].join(','),
      fontWeight: 400,
      color: 'white',
      fontSize: '1rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontFamily: ['Noto Sans', 'Inter'].join(','),
      fontWeight: 400,
      color: 'white',
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: ['Inter'].join(','),
      fontWeight: 400,
      color: 'white',
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontFamily: ['Open Sans Variable', 'Inter'].join(','),
      fontWeight: 400,
      color: 'white',
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#676767',
        },
        root: {
          [`&:hover .MuiOutlinedInput-notchedOutline`]: {
            borderColor: '#F2B705',
          },
          [`&.Mui-focused .MuiOutlinedInput-notchedOutline`]: {
            borderColor: '#F2B705',
          },
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme);

export default theme;
