import Router from './router/Router';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
// import { createTheme } from '@material-ui/core/styles';

// const theme = createTheme({
//   palette: {
//     primary: "#ff0939"
//   },
// });

function App() {
  return (
    <ThemeProvider>
      <CssBaseline/>
      <Router />
    </ThemeProvider>
  );
}

export default App;
