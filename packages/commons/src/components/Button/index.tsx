/* eslint-disable react/require-default-props */
import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { ButtonProps } from './types'
import { ButtonWrapper, ButtonText } from './styles'

const Button = ({
  onPress,
  appearance,
  text,
  alignText,
  marginBottom,
  width,
  icon,
  alignIcon,
  alignItems,
  className,
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper
      appearance={appearance}
      onPress={onPress}
      onClick={onPress}
      activeOpacity={1}
      width={width}
      marginBottom={marginBottom}
      alignIcon={alignIcon}
      alignItems={alignItems}
      className={className}
      as={Platform.OS === 'web' ? 'button' : TouchableOpacity}
      {...props}
      accessibilityRole="button"
    >
      {!!text && (
        <>
          <ButtonText appearance={appearance} alignText={alignText}>
            {text}
          </ButtonText>
          {icon}
        </>
      )}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  appearance: 'primary',
  marginBottom: 3,
}

export default Button
