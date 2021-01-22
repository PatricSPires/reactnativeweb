import { Text, TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../styles/theme'
import { CheckboxProps } from './types'

export const CheckBoxWrapper = styled(View)<CheckboxProps>`
  width: 15px;
  height: 15px;
  border: 2px solid;
  border-color: ${theme.colors.high_contrast_border};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15px;
    height: 15px;
  }

  ${({ checked, disabled }: CheckboxProps) => {
    if (checked === true && disabled === false) {
      return `
        background-color: ${theme.colors.high_contrast_border};
      `
    }

    if (checked === false && disabled === true) {
      return `
        border-color: ${theme.colors.primary_subtle_border};
        background-color: transparent;
      `
    }
    return ``
  }}
`

export const CheckBoxCheck = styled(View)<CheckboxProps>`
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-radius: 2px;

  ${({ checked, disabled }: CheckboxProps) => {
    if (checked === true && disabled === true) {
      return `
        background-color: ${theme.colors.high_contrast_border};
      `
    }
    return ``
  }}
`

export const CheckBoxText = styled(Text)`
  margin-left: 8px;
  color: ${(props: CheckboxProps) =>
    props.disabled
      ? theme.colors.primary_subtle_border
      : theme.colors.high_contrast_border};
`

export const Container = styled(TouchableWithoutFeedback)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
