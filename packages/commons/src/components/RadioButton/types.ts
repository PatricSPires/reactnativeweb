import React from 'react'
import { ThemeType } from '../../styles/types'

export type RadioButtonProps = {
  onPress?: () => void
  children?: React.ReactNode
  checked?: boolean
  disabled: boolean
  theme?: ThemeType
}
