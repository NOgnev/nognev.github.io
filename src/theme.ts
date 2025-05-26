import { extendTheme, type ThemeConfig, type StyleFunctionProps } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const colors = {
  brand: {
    50: '#e0f6fb',
    100: '#b3e6f4',
    200: '#80d5ed',
    300: '#4dc4e6',
    400: '#26b6e0',
    500: '#009FCC', // ← основной
    600: '#008db6',
    700: '#00779a',
    800: '#00627e',
    900: '#00435a',
  },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373', // нейтральный серый
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717', // более нейтральный темный
    },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
    },
  }),
};

const theme = extendTheme({ config, colors, styles });

export default theme;
