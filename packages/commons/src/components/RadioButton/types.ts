export type RadioButtonProps = {
  label: string
  checked?: boolean
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  onPress?: () => void
}
