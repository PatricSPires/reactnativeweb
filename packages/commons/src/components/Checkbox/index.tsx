import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { CheckBoxProps } from './types'

import { Wrapper, Box, Label } from './styles'

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  checked,
  justifyContent,
  onPress,
}) => {
  return (
    <Wrapper
      justifyContent={justifyContent}
      onPress={onPress}
      activeOpacity={1}
    >
      <Box checked={false} onPress={onPress} activeOpacity={1}>
        {checked ? <Icon size={12} name="check" color="#000" /> : null}
      </Box>
      <Label>{label}</Label>
    </Wrapper>
  )
}

export default CheckBox
