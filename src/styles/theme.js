const fallbackFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

export default {
  grid: {
    container: '1300px',
    gap: '',
  },
  border: {
    radius: '',
  },
  font: {
    family: `Roboto, ${fallbackFonts}`,
    familySecondary: `'Open Sans', ${fallbackFonts}`,
    light: 300,
    normal: 500,
    bold: 700,
    sizes: {
      xsmall: '4px',
      small: '8px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
      xxlarge: '48px',
    },
  },
  colors: {
    primary: '#2FD75D',
    secondary: '',
    mainBg: '',
    white: '#ffffff',
    black: '',
  },
  spacings: {
    xxsmall: '8px',
    xsmall: '16px',
    small: '24px',
    medium: '32px',
    large: '48px',
    xlarge: '64px',
    xxlarge: '72px',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
}
