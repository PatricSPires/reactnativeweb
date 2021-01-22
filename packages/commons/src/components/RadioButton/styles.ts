import styled from 'styled-components'
import { TouchableWithoutFeedback, View, Text } from 'react-native'
import theme from '../../styles/theme'
import { RadioButtonProps } from './types'

export const RadioButtonWrapper = styled(View)`
  width: 18px;
  height: 18px;
  border: 2px solid;
  border-color: ${theme.colors.high_contrast_border};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ checked, disabled }: RadioButtonProps) => {
    if (checked === false && disabled) {
      return `
        border-color: ${theme.colors.primary_subtle_border};
      `
    }
    return ``
  }}
`

export const RadioButtonCheck = styled(View)`
  width: 8px;
  height: 8px;
  border-radius: 100%;

  ${({ checked, disabled }: RadioButtonProps) => {
    if (checked && checked === true && !disabled) {
      return `
        background-color: ${theme.colors.high_contrast_border};
      `
    }

    if (checked && checked === true && disabled && disabled === true) {
      return `
        background-color: ${theme.colors.high_contrast_border};
      `
    }
    return ``
  }}
`

export const RadioButtonText = styled(Text)`
  margin-left: 8px;
  color: ${(props: RadioButtonProps) =>
    props.disabled && props.disabled === true
      ? theme.colors.primary_subtle_border
      : theme.colors.high_contrast_border};
`

export const Container = styled(TouchableWithoutFeedback)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: ${(props: RadioButtonProps) =>
    props.disabled && props.disabled === true ? 'not-allowed' : 'pointer'};

  &:focus ${RadioButtonWrapper} {
    border-color: ${theme.supportColors.information};
    box-shadow: 0px 0px 0px 1px ${theme.supportColors.information};
    ${({ checked, disabled }: RadioButtonProps) => {
      if (checked === true && disabled === false) {
        return `
          box-shadow: 0px 0px 0px 1px ${theme.supportColors.information};
        `
      }
      return ``
    }}
  }
`
