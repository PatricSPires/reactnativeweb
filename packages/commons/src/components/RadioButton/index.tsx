import React from 'react'
import { RadioButtonProps } from './types'
import { Wrapper, Box, Label, Check } from './styles'

const RedioButton = ({
  label,
  checked,
  justifyContent,
  onPress,
}: RadioButtonProps) => {
  return (
    <Wrapper
      justifyContent={justifyContent}
      onPress={onPress}
      activeOpacity={1}
    >
      <Box checked={checked} onPress={onPress} activeOpacity={1}>
        <Check checked={checked} onPress={onPress} />
      </Box>
      <Label>{label}</Label>
    </Wrapper>
  )
}

export default RedioButton
