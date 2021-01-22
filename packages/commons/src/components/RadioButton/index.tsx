import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RadioButtonProps } from './types'

import {
  Container,
  RadioButtonWrapper,
  RadioButtonCheck,
  RadioButtonText,
} from './styles'

const RadioButton = ({
  children,
  checked,
  onPress,
  disabled,
}: RadioButtonProps) => (
  <Container
    accessibilityRole="radio"
    disabled={disabled}
    checked={checked}
    onPress={onPress}
  >
    <View style={styles.wrapper}>
      <RadioButtonWrapper checked={checked} disabled={disabled}>
        <RadioButtonCheck checked={checked} disabled={disabled} />
      </RadioButtonWrapper>
      {children && (
        <RadioButtonText disabled={disabled}>{children}</RadioButtonText>
      )}
    </View>
  </Container>
)

RadioButton.defaultProps = {
  disabled: false,
  checked: false,
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default RadioButton
