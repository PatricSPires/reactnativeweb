import { DefaultTheme } from 'styled-components'
import { gray, white } from '../colors'
import theme from '../theme'

const dark: DefaultTheme = {
  ...theme,
  title: 'dark',

  colors: {
    ...theme.colors,
    primary_container_background: gray[900],
    medium_contrast_border: gray[700],
    high_contrast_border: gray[500],
    font_color: gray[500],
    primary_color_light: gray[500],
  },
  supportColors: {
    ...theme.supportColors,
    information: white[500],
  },
}

export default dark
