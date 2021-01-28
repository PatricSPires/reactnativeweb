import React from 'react'
import { View } from 'react-native'
import { Label, TextInputView, TextInputComponent, HelperText } from './styles'
import { InputProps } from './types'

const Input = ({
  label,
  helperText,
  isInvalid,
  placeholder,
  passwordField,
}: InputProps) => {
  return (
    <View>
      {label && <Label>{label}</Label>}
      {helperText && <HelperText>{helperText}</HelperText>}
      <TextInputView isInvalid={isInvalid}>
        <TextInputComponent
          selectionColor="#161616"
          placeholder={placeholder}
          secureTextEntry={passwordField}
        />
      </TextInputView>
    </View>
  )
}

export default Input
