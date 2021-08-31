import { createTheme} from '@material-ui/core/styles';
import type { Theme } from "@material-ui/core/styles";
import { blue, valencia } from './colors';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    tablet: true; // adds the `tablet` breakpoint
    laptop: true;
    desktop: true;
  }
}

export const create = ():Theme => {
  return createTheme({
    palette: {
      background: {
        default: "#ffffff"
      },
      primary: {
        main: blue,
        contrastText: 'white'
      },
      warning: {
        main: valencia
      }
    },
    typography: {
      fontFamily: ['D-DIN-Exp', 'Helvetica Neue', 'sans-serif'].join(','),
      fontSize: 14,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            boxSizing: 'border-box',
          },
        },
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        tablet: 640,
        laptop: 1024,
        desktop: 1280,
      },
    },
  });
}

export default create;
