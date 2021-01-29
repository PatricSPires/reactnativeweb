import styled, { css } from 'styled-components/native'
import { ThemeProps } from '../../styles/customThemes/types'
import { InputProps } from './types'

export const Label = styled.Text`
  color: ${({ theme }: ThemeProps) =>
    theme.colors.primary_container_background};
  margin-bottom: 8px;
`

export const HelperText = styled.Text`
  color: ${({ theme }: ThemeProps) =>
    theme.colors.primary_container_background};
  margin: 2px 0 8px;
`

export const TextInputView = styled.View`
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.primary_container_background};
  width: 288px;

  ${({ isInvalid, theme }: InputProps & ThemeProps) => css`
    border: ${isInvalid ? '2px solid' : 'none'};
    border-color: ${isInvalid
      ? theme.supportColors.error
      : theme.colors.medium_contrast_border};
    border-bottom-width: 2px;
    border-bottom-color: ${isInvalid
      ? theme.supportColors.error
      : theme.colors.medium_contrast_border};
  `}
`

export const TextInputComponent = styled.TextInput`
  padding: 11px 16px;
  color: ${({ theme }: ThemeProps) => theme.colors.high_contrast_border};
`
