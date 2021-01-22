import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  CheckBoxCheck,
  CheckBoxText,
  CheckBoxWrapper,
  Container,
} from './styles'
import { CheckboxProps } from './types'

const Checkbox = ({ children, checked, onPress, disabled }: CheckboxProps) => (
  <Container accessibilityRole="checkbox" disabled={disabled} onPress={onPress}>
    <View style={styles.wrapper}>
      <CheckBoxWrapper checked={checked} disabled={disabled}>
        <CheckBoxCheck checked={checked} disabled={disabled} />
      </CheckBoxWrapper>
      {children && <CheckBoxText disabled={disabled}>{children}</CheckBoxText>}
    </View>
  </Container>
)

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Checkbox
