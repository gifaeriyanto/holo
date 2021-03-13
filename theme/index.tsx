import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import colors from 'theme/colors';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  colors,
  radii: {
    md: '4px',
  },
  styles: {
    global: {
      body: {
        color: '#363636',
        fontWeight: 500,
      },
    },
  },
  components: {},
} as ThemeOverride);

export default theme;
