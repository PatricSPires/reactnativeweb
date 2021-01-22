import React, { useState } from 'react'
import { View } from 'react-native'
import { EyeOff } from '@styled-icons/feather/EyeOff'
import { Eye } from '@styled-icons/feather/Eye'
import { InputProps } from './types'
import {
  TextInput,
  HelperText,
  Wrapper,
  InputWrapper,
  Icon,
  PasswordIconWrapper,
} from './styles'

const Input = ({
  placeholder,
  value,
  onChange,
  disabled,
  isInvalid,
  helperText,
  iconPosition,
  icon,
  iconColor,
  passwordField,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(passwordField)

  function changePasswordView() {
    setShowPassword(!showPassword)
  }

  return (
    <Wrapper testID="wrapper">
      {!!helperText && <HelperText>{helperText}</HelperText>}
      <InputWrapper isInvalid={isInvalid}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          iconPosition={iconPosition}
          secureTextEntry={showPassword}
        />
        {isInvalid && !passwordField && (
          <Icon iconColor={iconColor} iconPosition={iconPosition}>
            {icon}
          </Icon>
        )}
        {passwordField && (
          <PasswordIconWrapper
            testID="passwordIconWrapper"
            onPress={() => changePasswordView()}
          >
            <View>{showPassword ? <EyeOff /> : <Eye />}</View>
          </PasswordIconWrapper>
        )}
      </InputWrapper>
    </Wrapper>
  )
}

Input.defaultProps = {
  passwordField: false,
}

export default Input
