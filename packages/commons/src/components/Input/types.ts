export type InputProps = {
  placeholder?: string
  value?: string
  onChange?: () => void
  disabled?: boolean
  isInvalid: boolean
  label?: string
  helperText?: string
  iconPosition?: 'left' | 'right'
  icon?: React.ReactNode
  iconColor: 'error' | 'warning' | 'success'
  passwordField: boolean
}

export type TextInputProps = Pick<
  InputProps,
  'placeholder' | 'value' | 'onChange' | 'disabled' | 'iconPosition'
>

export type IconProps = Pick<InputProps, 'iconColor' | 'iconPosition'>

export type InputWrapperProps = {
  isInvalid: boolean
}
