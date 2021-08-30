import { createTheme} from '@material-ui/core/styles';
import type { Theme } from "@material-ui/core/styles";
import { blue, valencia } from './colors';

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
  });
}

export default create;
