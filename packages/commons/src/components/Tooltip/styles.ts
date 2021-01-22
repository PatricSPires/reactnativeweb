import styled from 'styled-components'
import { Text, View } from 'react-native'
import theme from '../../styles/theme'

export const TooltipHint = styled(Text)`
  visibility: hidden;
  width: 120px;
  background-color: ${theme.colors.high_contrast_border};
  color: ${theme.colors.primary_background};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -220%;
  left: 68%;
  margin-left: -60px;

  ::after {
    content: '';
    position: absolute;
    bottom: -38%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${theme.colors.high_contrast_border}
      transparent;
    transform: rotate(180deg);
  }
`

export const TooltipWrapper = styled(View)`
  position: relative;
  display: flex;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }

  :hover ${TooltipHint} {
    visibility: visible;
  }
`
