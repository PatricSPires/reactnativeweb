import styled from 'styled-components'
import { RadioButtonProps } from './types'

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: ${({ justifyContent }: RadioButtonProps) =>
    justifyContent || 'center'};
  width: 100%;
  margin: 8px 0;
`

export const Box = styled.TouchableOpacity<RadioButtonProps>`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-radius: 50px;
  border-color: #000;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  padding: 2px;
`

export const Check = styled.TouchableOpacity<RadioButtonProps>`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${({ checked }: RadioButtonProps) =>
    checked ? '#000' : 'transparent'};
`

export const Label = styled.Text`
  color: #000;
  margin-left: 8px;
`
