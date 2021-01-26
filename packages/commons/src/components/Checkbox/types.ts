export type BoxProps = {
  checked: boolean
}

export type CheckBoxProps = {
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
  checkedColor?: string
  uncheckedColor?: string
}
