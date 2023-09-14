import { createStitches } from '@stitches/react';

export const { theme, styled, globalCss, createTheme } = createStitches({
  theme: {
    colors: {
      primary: import.meta.env.VITE_PRIMARY_COLOR,
      secondary: import.meta.env.VITE_SECONDARY_COLOR,
      tertiary: import.meta.env.VITE_TERTIARY_COLOR,
    },
  },
  media: {
    small: '(max-width: 720px)',
    medium: '(max-width: 1366px)',
  },
});
