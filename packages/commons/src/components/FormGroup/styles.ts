import styled from 'styled-components/native'
import { FormGroupWrapperProps } from './types'

export const FormGroupWrapper = styled.View<FormGroupWrapperProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  margin-bottom: ${({ marginBottom, theme }) =>
    theme.spacings[marginBottom || 3]};

  Tag {
    margin: 8px 0 4px 0;
  }
`

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.font_color};
  font-size: ${({ theme }) => theme.fontSize.label_01};
  margin-bottom: ${({ theme }) => theme.spacings[1]};
  display: flex;
  align-items: center;
`

export const HelperText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.label_01};
  color: ${({ theme }) => theme.colors.medium_contrast_border};
`

export const ErrorMessage = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.label_01};
  color: ${({ theme }) => theme.supportColors.error};
  margin-top: ${({ theme }) => theme.spacings[1]};
`
