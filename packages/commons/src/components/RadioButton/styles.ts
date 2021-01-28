import styled from 'styled-components/native'
import { ThemeProps } from '../../styles/customThemes/types'
import { RadioButtonProps } from './types'

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: ${({ justifyContent }: RadioButtonProps) =>
    justifyContent || 'center'};
  width: 100%;
  margin: ${({ theme }: ThemeProps) => theme.spacings[1]} 0;
`

export const Box = styled.TouchableOpacity<RadioButtonProps>`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-radius: 50px;
  border-color: ${({ theme }: ThemeProps) => theme.colors.high_contrast_border};
  background-color: transparent;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }: ThemeProps) => theme.spacings[1]};
`

export const Check = styled.TouchableOpacity<RadioButtonProps>`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${({ checked, theme }: RadioButtonProps & ThemeProps) =>
    checked ? theme.colors.high_contrast_border : 'transparent'};
`

export const Label = styled.Text`
  color: ${({ theme }: ThemeProps) => theme.colors.high_contrast_border};
  margin-left: ${({ theme }: ThemeProps) => theme.spacings[1]};
`
