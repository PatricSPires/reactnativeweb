import styled from 'styled-components/native'
import { SwitchProps } from './types'

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: ${({ justifyContent }: SwitchProps) =>
    justifyContent || 'center'};
  width: 100%;
  margin: 8px 0;
  align-items: center;
`

export const Box = styled.View<SwitchProps>`
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
  z-index: -1;
`

export const Check = styled.View<SwitchProps>`
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background-color: ${({ checked }: SwitchProps) =>
    checked ? '#fff' : '#e0e0e0'};
  z-index: -1;
`

export const Label = styled.Text`
  color: #000;
  margin-left: 8px;
`
