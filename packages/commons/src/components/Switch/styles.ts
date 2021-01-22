import styled, { css } from 'styled-components'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { SwitchProps } from './types'
import theme from '../../styles/theme'

export const Container = styled(TouchableOpacity)`
  position: relative;
  display: inline-block;
  width: ${(props: SwitchProps) => (props.size === 'small' ? 32 : 52)}px;
  height: ${(props: SwitchProps) => (props.size === 'small' ? 16 : 24)}px;
  border-radius: ${(props: SwitchProps) =>
    props.size === 'small' ? 100 : 12}px;
  background-color: ${theme.colors.medium_contrast_border};
  outline: 2px solid;
  outline-color: transparent;

  ${(props: SwitchProps) =>
    props.checked &&
    css`
      background-color: ${theme.supportColors.success};

      &:focus {
        outline-color: ${theme.supportColors.information};
      }
    `}

  ${(props: SwitchProps) =>
    props.disabled &&
    css`
      background-color: ${theme.colors.primary_subtle_border};
      outline-color: transparent;
    `}
`

export const Wrapper = styled(TouchableWithoutFeedback)`
  position: absolute;
  width: ${(props: SwitchProps) => (props.size === 'small' ? 10 : 18)}px;
  height: ${(props: SwitchProps) => (props.size === 'small' ? 10 : 18)}px;
  border-radius: 50%;
  background-color: #fff;
  top: 3px;
  left: 3px;
  -webkit-transition: left 0.25s ease;
  transition: left 0.25s ease;

  ${({ checked, size }: SwitchProps) =>
    checked &&
    `
    -webkit-transition: left 0.25s ease;
    transition: left 0.25s ease;
    left: ${size === 'small' ? 19 : 31}px;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    background-color: ${theme.colors.medium_contrast_border};
  `}
`
