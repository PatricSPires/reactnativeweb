import styled, { css } from 'styled-components'
import { TouchableOpacity, Text, Platform } from 'react-native'
import { ButtonTextProps, ButtonWrapperProps } from './types'
import { buttonAppearances, textAppearances } from './appearance'

export const ButtonWrapper = styled(TouchableOpacity)<ButtonWrapperProps>`
  ${({ appearance, alignIcon, alignItems }: ButtonWrapperProps) => css`
    display: flex;
    align-items: center;
    height: 48px;
    max-width: 300px;
    min-width: 48px;
    width: 178px;
    padding: 16px;
    flex-direction: ${alignIcon === 'left' ? 'row-reverse' : 'row'};
    justify-content: ${alignItems === 'center' ? 'center' : 'space-between'};
    border: none;
    ${Platform.OS === 'web' && 'cursor: pointer'};
    ${!!appearance && buttonAppearances[appearance]()};
  `}
`

export const ButtonText = styled(Text)<ButtonTextProps>`
  ${({ appearance }: ButtonTextProps) => css`
    ${!!appearance && textAppearances[appearance]()};
  `}
`
