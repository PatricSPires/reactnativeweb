export type ColorsThemeType = {
  primary_background: string
  primary_container_background: string
  primary_subtle_border: string
  medium_contrast_border: string
  high_contrast_border: string
  primary: string
  primary_color_light: string
  primary_color_dark: string
}

export type SupportColorsType = {
  error: string
  error_medium: string
  error_dark: string
  success: string
  warning: string
  information: string
}

export type HighContrastType = {
  danger_high_contrast: string
  success_high_constrast: string
  warning_high_contrast: string
  information_high_contrast: string
}

export type FontSizeType = {
  code_01: string
  code_02: string
  label_01: string
  caption_01: string
  helper_text_01: string
  body_short_01: string
  body_short_02: string
  body_long_01: string
  body_long_02: string
  productive_heading_01: string
  productive_heading_02: string
  productive_heading_03: string
  productive_heading_04: string
  productive_heading_05: string
  productive_heading_06: string
  productive_heading_07: string
}

export type FontSizeThemeType = {
  tiny: string
  small: string
  medium: string
  large: string
  giant: string
}

export type PaddingThemeType = {
  button: string
}

export type ButtonSizeThemeType = {
  tiny: string
  small: string
  medium: string
  large: string
  giant: string
}

export type IconSizeThemeType = {
  tiny: string
  small: string
  medium: string
  large: string
  giant: string
}

export type SpacingThemeType = {
  [key: number]: string
}

export type AppearanceOptions =
  | 'disabled'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'danger'

export interface ThemeType {
  colors: ColorsThemeType
  supportColors: SupportColorsType
  highContrastColors: HighContrastType
  fontSize: FontSizeType
  padding: PaddingThemeType
  buttonSize: ButtonSizeThemeType
  iconSize: IconSizeThemeType
  spacings: SpacingThemeType
}
