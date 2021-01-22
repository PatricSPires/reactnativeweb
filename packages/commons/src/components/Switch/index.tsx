import React from 'react'
import { Text } from 'react-native'
import { SwitchProps } from './types'
import { Container, Wrapper } from './styles'

const Switch = ({ checked, size, disabled, onPress }: SwitchProps) => (
  <Container
    activeOpacity={0}
    size={size}
    checked={checked}
    disabled={disabled}
    onPress={onPress}
  >
    <Wrapper
      checked={checked}
      size={size}
      disabled={disabled}
      onPress={onPress}
    >
      <Text />
    </Wrapper>
  </Container>
)

export default Switch
