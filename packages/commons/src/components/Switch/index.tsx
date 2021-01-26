import React from 'react'
import { SwitchProps } from './types'

import { Wrapper, Box, Label, Check } from './styles'

const Switch = ({ label, checked, justifyContent, onPress }: SwitchProps) => {
  return (
    <Wrapper
      justifyContent={justifyContent}
      onPress={onPress}
      activeOpacity={1}
    >
      <Box checked={checked} activeOpacity={1}>
        <Check checked={checked} activeOpacity={1} />
      </Box>
      <Label>{label}</Label>
    </Wrapper>
  )
}

export default Switch
