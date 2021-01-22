import React from 'react'
import { ButtonProps } from './types'
import { ButtonComponent, TextComponent } from './styles'

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
}: ButtonProps) => {
  return (
    <ButtonComponent
      appearance={appearance}
      onPress={onPress}
      activeOpacity={1}
      width={width}
      marginBottom={marginBottom}
      alignIcon={alignIcon}
      alignItems={alignItems}
      accessibilityRole="button"
    >
      {!!text && (
        <>
          <TextComponent appearance={appearance} alignText={alignText}>
            {text}
          </TextComponent>
          {icon}
        </>
      )}
    </ButtonComponent>
  )
}

Button.defaultProps = {
  appearance: 'primary',
  marginBottom: 3,
}

export default Button
