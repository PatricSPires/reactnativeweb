// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// TODO: Tentamos achar uma forma de corrigir a tipagem da tag, mas, infelizmente falhamos, a final somos humanos.
import React from 'react'
import { FormGroupProps } from './types'
import { FormGroupWrapper, Label, HelperText, ErrorMessage } from './styles'
import Tooltip from '../Tooltip'

const FormGroup = ({
  tag: Tag,
  label,
  width,
  labelHint,
  placeholder,
  helperText,
  iconPosition,
  icon,
  iconColor,
  passwordField,
  marginBottom,
  meta = {},
  input = {
    onBlur: Function,
  },
  ...props
}: FormGroupProps) => {
  const isActive = meta.active
  const isInvalid = meta.error !== undefined && meta.touched && !isActive
  const isValid = meta.valid && meta.touched && !isActive

  return (
    <FormGroupWrapper width={width} marginBottom={marginBottom}>
      {!!label && (
        <Label>
          {label}
          {/* {!!labelHint && <Tooltip hint={labelHint} />} */}
        </Label>
      )}
      {!!helperText && <HelperText>{helperText}</HelperText>}
      <Tag
        {...input}
        {...props}
        placeholder={placeholder}
        active={isActive}
        isInvalid={isInvalid}
        isValid={isValid}
        iconPosition={iconPosition}
        icon={icon}
        iconColor={iconColor}
        passwordField={passwordField}
      />
      {!!isInvalid && <ErrorMessage>{meta.error}</ErrorMessage>}
    </FormGroupWrapper>
  )
}

FormGroup.defaultProps = {
  marginBottom: 3,
}

export default FormGroup
