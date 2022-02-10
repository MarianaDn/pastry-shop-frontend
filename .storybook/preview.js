import { ThemeProvider, CssBaseLine } from '@mui/material';
import { theme } from 'src/utils/theme';

const MuiDecorator = (renderStory) => (
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    {renderStory()}
  </ThemeProvider>
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}