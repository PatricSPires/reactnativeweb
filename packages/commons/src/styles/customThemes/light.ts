import { DefaultTheme } from 'styled-components'
import theme from '../theme'
import { white, gray, blue } from '../colors'

const light: DefaultTheme = {
  ...theme,
  title: 'light',

  colors: {
    primary_container_background: white[100],
    medium_contrast_border: gray[700],
    primary_color_light: blue[700],
    high_contrast_border: gray[500],
    font_color: gray[500],
  },
  supportColors: {
    information: white[500],
  },
}

export default light
