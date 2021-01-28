import 'styled-components'
import {
  ColorsThemeType,
  SupportColorsType,
  HighContrastType,
  FontSizeType,
  PaddingThemeType,
  ButtonSizeThemeType,
  IconSizeThemeType,
  SpacingThemeType,
} from './src/styles/types'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: ColorsThemeType
    supportColors: SupportColorsType
    highContrastColors: HighContrastType
    fontSize: FontSizeType
    padding: PaddingThemeType
    buttonSize: ButtonSizeThemeType
    iconSize: IconSizeThemeType
    spacings: SpacingThemeType
  }
}
