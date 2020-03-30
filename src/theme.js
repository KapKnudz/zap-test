import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#64b5f6',
      light: '#83c3f7',
      dark: '#467eac',
      contrastText: 'white',
    },
    secondary: {
      main: '#c7f7d4',
      light: '#b9f6ca',
      dark: '#81ac8d',
    }

  },
  status: {
    danger: 'red',
  },
});

export default theme;