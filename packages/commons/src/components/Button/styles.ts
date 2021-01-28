import styled, { css } from 'styled-components/native'
import { ThemeProps } from '../../styles/customThemes/types'

import { ButtonTextProps, ButtonWrapperProps } from './types'
import { getButtonAppearance, getTextAppearance } from './appearance'

export const ButtonWrapper = styled.TouchableOpacity<
  ButtonWrapperProps & ThemeProps
>`
  ${({ alignIcon, alignItems, theme }) => css`
    display: flex;
    align-items: center;
    height: 48px;
    max-width: 300px;
    min-width: 48px;
    width: 178px;
    border: none;
    padding: ${theme.spacings[2]};
    flex-direction: ${alignIcon === 'left' ? 'row-reverse' : 'row'};
    justify-content: ${alignItems === 'center' ? 'center' : 'space-between'};
    ${getButtonAppearance}
  `}
`

export const ButtonText = styled.Text<ButtonTextProps>`
  ${getTextAppearance}
`
