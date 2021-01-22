import styled from 'styled-components'
import { View, Text } from 'react-native'
import theme from '../../styles/theme'
import { FormGroupWrapperProps } from './types'

export const FormGroupWrapper = styled(View)<FormGroupWrapperProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  margin-bottom: ${({ marginBottom }) => theme.spacings[marginBottom || 3]};

  Tag {
    margin: 8px 0 4px 0;
  }
`

export const Label = styled(Text)`
  color: ${(props) => props.theme.colors.font_color};
  font-size: ${theme.fontSize.label_01};
  margin-bottom: ${theme.spacings[1]};
  display: flex;
  align-items: center;
`

export const HelperText = styled(Text)`
  font-size: ${theme.fontSize.label_01};
  color: ${theme.colors.medium_contrast_border};
`

export const ErrorMessage = styled(Text)`
  font-size: ${theme.fontSize.label_01};
  color: ${theme.supportColors.error};
  margin-top: ${theme.spacings[1]};
`
