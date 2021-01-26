import styled, { css } from 'styled-components'
import { TouchableOpacity, Text } from 'react-native'
import { ButtonTextProps, ButtonWrapperProps } from './types'
import { buttonAppearances, textAppearances } from './appearance'

export const ButtonWrapper = styled(TouchableOpacity)<ButtonWrapperProps>`
  ${({ appearance, alignIcon, alignItems }) => css`
    display: flex;
    align-items: center;
    height: 48px;
    max-width: 300px;
    min-width: 48px;
    width: 178px;
    padding: 16px;
    flex-direction: ${alignIcon === 'left' ? 'row-reverse' : 'row'};
    justify-content: ${alignItems === 'center' ? 'center' : 'space-between'};
    ${!!appearance && buttonAppearances[appearance]()};
  `}
`

export const ButtonText = styled(Text)<ButtonTextProps>`
  ${({ appearance }) => css`
    ${!!appearance && textAppearances[appearance]()};
  `}
`
