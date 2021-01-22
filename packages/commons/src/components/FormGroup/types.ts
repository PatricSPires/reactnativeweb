type Input = {
  name?: string
  value?: string
  onFocus?: () => void
  onBlur: () => void
}

export type FormGroupProps = {
  name: string
  tag: unknown
  label?: string
  width?: string
  labelHint?: string
  activeAppearance?: string
  className?: string
  placeholder?: string
  helperText?: string
  meta?: {
    active?: boolean
    touched?: boolean
    error?: string
    valid?: boolean
  }
  input?: Input
  iconPosition?: 'left' | 'right'
  icon?: React.ReactNode
  iconColor?: 'error' | 'warning' | 'success'
  isInvalid?: boolean
  passwordField?: boolean
  marginBottom: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export type FormGroupWrapperProps = Pick<
  FormGroupProps,
  'width' | 'marginBottom'
>
