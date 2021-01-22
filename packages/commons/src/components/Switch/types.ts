import { ThemeType } from '../../styles/types'

export type SwitchProps = {
  checked?: boolean
  disabled?: boolean
  onPress?: () => void
  theme?: ThemeType
  size?: string
}
