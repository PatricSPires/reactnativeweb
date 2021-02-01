import { css } from 'styled-components'
import { ThemeType, AppearanceOptions } from '../../styles/types'

type AppearanceProps = {
  theme: ThemeType
  appearance: AppearanceOptions
}

export function getButtonAppearance({ theme, appearance }: AppearanceProps) {
  const options = {
    disabled: () => css`
      background-color: ${theme.colors.primary_subtle_border};
    `,
    primary: () => css`
      background-color: ${theme.colors.primary_color_light};
    `,
    secondary: () => css`
      background-color: ${theme.colors.high_contrast_border};
    `,
    tertiary: () => css`
      background-color: transparent;
      border: 1px solid ${theme.colors.primary_color_light};
    `,
    ghost: () => css`
      background-color: transparent;
    `,
    danger: () => css`
      background-color: ${theme.supportColors.error};
    `,
  }

  return options[appearance]
}

export function getTextAppearance({ theme, appearance }: AppearanceProps) {
  const options = {
    disabled: () => css`
      color: ${theme.colors.medium_contrast_border};
    `,
    primary: () => css`
      color: ${theme.colors.primary_background};
    `,
    secondary: () => css`
      color: ${theme.colors.primary_background};
    `,
    tertiary: () => css`
      color: ${theme.colors.primary_color_light};
    `,
    ghost: () => css`
      color: ${theme.colors.primary_color_light};
    `,
    danger: () => css`
      color: ${theme.colors.primary_background};
    `,
  }

  return options[appearance]
}

export const buttonAppearances = {}

export const textAppearances = {}
