import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { BoxProps, CheckBoxProps } from './types'
import theme from '../../styles/theme'

export const Wrapper = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: ${({ justifyContent }: CheckBoxProps) =>
    justifyContent || 'center'};
  width: 100%;
  margin: 8px 0;
`

export const Box = styled(TouchableOpacity)<BoxProps>`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-radius: 3px;
  border-color: ${theme.colors.primary_background};
  background-color: ${({ checked }: BoxProps) =>
    checked ? theme.colors.high_contrast_border : 'transparent'};
  justify-content: center;
  align-items: center;
`

export const Label = styled(Text)`
  color: ${theme.colors.primary_background};
  margin-left: 8px;
`
