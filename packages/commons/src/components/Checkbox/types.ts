import * as React from 'react'
import { ThemeType } from '../../styles/types'

export type CheckboxProps = {
  onPress?: () => void
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  theme?: ThemeType
}
