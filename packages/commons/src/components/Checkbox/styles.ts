import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { BoxProps, CheckBoxProps } from './types'

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
  border-color: #fff;
  background-color: ${({ checked }: BoxProps) =>
    checked ? '#161616' : 'transparent'};
  justify-content: center;
  align-items: center;
`

export const Label = styled(Text)`
  color: #fff;
  margin-left: 8px;
`
