import styled from 'styled-components/native'
import { ThemeProps } from '../../styles/customThemes/types'
import { SwitchProps } from './types'

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: ${({ justifyContent }: SwitchProps) =>
    justifyContent || 'center'};
  width: 100%;
  margin: ${({ theme }: ThemeProps) => theme.spacings[1]} 0;
  align-items: center;
`

export const Box = styled.View<SwitchProps>`
  width: 48px;
  height: 24px;
  border-width: 1px;
  border-radius: 50px;
  border-color: ${({ checked, theme }: SwitchProps & ThemeProps) =>
    checked
      ? theme.supportColors.success
      : theme.colors.medium_contrast_border};
  background-color: ${({ checked, theme }: SwitchProps & ThemeProps) =>
    checked
      ? theme.supportColors.success
      : theme.colors.medium_contrast_border};
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
  background-color: ${({ checked, theme }: SwitchProps & ThemeProps) =>
    checked
      ? theme.colors.primary_background
      : theme.colors.primary_subtle_border};
  z-index: -1;
`

export const Label = styled.Text`
  color: ${({ theme }: ThemeProps) => theme.colors.high_contrast_border};
  margin-left: ${({ theme }: ThemeProps) => theme.spacings[1]};
`
