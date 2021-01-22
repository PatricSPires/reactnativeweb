import styled, { css } from 'styled-components'
import {
  Text,
  TextInput as InputRN,
  View,
  TouchableWithoutFeedback,
} from 'react-native'
import { TextInputProps, IconProps, InputWrapperProps } from './types'
import theme from '../../styles/theme'

function getFocusStyles(isInvalid: boolean) {
  if (isInvalid) {
    return `
      outline: 2px solid ${theme.supportColors.error};
      border-bottom-color: transparent;
    `
  }
  return `
    outline: 2px solid ${theme.colors.primary_background};
    border-bottom-color: transparent;
  `
}

export const Wrapper = styled(View)`
  width: 100%;
`

export const InputWrapper = styled(View)<InputWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.theme.colors.primary_container_background};
  border-bottom: 1px solid ${theme.colors.medium_contrast_border};

  ${({ isInvalid }) => css`
    outline: ${!!isInvalid && `2px solid ${theme.supportColors.error}`};
    border: ${!!isInvalid && 'none'};
  `}

  &:focus-within {
    ${({ isInvalid }) => getFocusStyles(isInvalid)}
  }
`

export const TextInput = styled(InputRN)<TextInputProps>`
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.colors.font_color};
  font-weight: normal;
  line-height: 18px;
  outline: transparent;
  font-size: 14px;

  order: ${({ iconPosition }) => (iconPosition === 'right' ? 0 : 1)};
  padding: ${({ iconPosition }) =>
    iconPosition === 'left' ? '0 10px 0 0' : '0 0 0 10px'};

  &:disabled {
    outline: none;
    border: none;
    color: ${(props) => props.theme.colors.font_color};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.font_color};
  }

  &:focus-within {
    color: ${(props) => props.theme.colors.font_color};
  }
`

export const HelperText = styled(Text)`
  font-size: 12px;
  color: ${theme.colors.medium_contrast_border};
`

export const ErrorMessage = styled(Text)`
  font-size: 12px;
  color: ${theme.supportColors.error};
`

export const Icon = styled(View)<IconProps>`
  order: ${({ iconPosition }) => (iconPosition === 'right' ? 1 : 0)};
  color: ${theme.colors.primary_background};
  margin: 0 10px;

  svg {
    width: 16px;
    ${({ iconColor }: IconProps) => css`
      color: ${theme.supportColors[iconColor]};
    `}
  }
`

export const PasswordIconWrapper = styled(TouchableWithoutFeedback)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.colors.font_color};
  margin: 0 10px;
`
