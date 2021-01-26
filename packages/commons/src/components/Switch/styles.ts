import styled from 'styled-components/native'
import { SwitchProps } from './types'

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: ${({ justifyContent }: SwitchProps) =>
    justifyContent || 'center'};
  width: 100%;
  margin: 8px 0;
`

export const Box = styled.TouchableOpacity<SwitchProps>`
  width: 48px;
  height: 24px;
  border-width: 1px;
  border-radius: 50px;
  border-color: ${({ checked }: SwitchProps) =>
    checked ? '#24a148' : '#8d8d8d'};
  background-color: ${({ checked }: SwitchProps) =>
    checked ? '#24a148' : '#8d8d8d'};
  justify-content: ${({ checked }: SwitchProps) =>
    checked ? 'flex-end' : 'flex-start'};
  flex-direction: row;
  align-items: center;
  padding: 0 3px;
`

export const Check = styled.TouchableOpacity<SwitchProps>`
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background-color: ${({ checked }: SwitchProps) =>
    checked ? '#fff' : '#e0e0e0'};
`

export const Label = styled.Text`
  color: #000;
  margin-left: 8px;
`
