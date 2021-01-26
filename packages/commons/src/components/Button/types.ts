import { AppearanceOptions } from '../../styles/types'

export type ButtonProps = {
  onPress: () => void
  appearance?: AppearanceOptions
  text?: string
  alignText?: 'left' | 'center' | 'right'
  marginBottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  width?: string
  icon?: JSX.Element
  alignIcon?: 'left' | 'right'
  alignItems?: 'normal' | 'center'
  className?: string
}

export type ButtonWrapperProps = Pick<
  ButtonProps,
  | 'appearance'
  | 'onPress'
  | 'onPress'
  | 'marginBottom'
  | 'width'
  | 'alignIcon'
  | 'alignItems'
  | 'className'
> & {
  onClick: () => void
  activeOpacity: number
  accessibilityRole: string
}

export type ButtonTextProps = Pick<ButtonProps, 'alignText' | 'appearance'>
