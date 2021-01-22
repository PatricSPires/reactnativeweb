import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { AlertCircle } from '@styled-icons/feather/AlertCircle'
import Input from './index'
import { InputProps } from './types'

export default { title: 'Formulário/Input' }

export const Default: Story<InputProps> = (args) => <Input {...args} />
Default.args = {
  placeholder: 'Placeholder',
  disabled: false,
  isInvalid: false,
}

export const WithLabel: Story<InputProps> = (args) => <Input {...args} />
WithLabel.args = {
  placeholder: 'Placeholder',
  disabled: false,
  isInvalid: false,
  label: 'Enter name',
}

export const WithHelperText: Story<InputProps> = (args) => <Input {...args} />
WithHelperText.args = {
  placeholder: 'Placeholder',
  disabled: false,
  isInvalid: false,
  label: 'Enter name',
  helperText: 'Full name',
}

export const WithErrorIconLeft: Story<InputProps> = (args) => (
  <Input {...args} />
)
WithErrorIconLeft.args = {
  placeholder: 'Placeholder',
  disabled: false,
  isInvalid: true,
  label: 'Enter name',
  helperText: 'Full name',
  icon: <AlertCircle />,
  iconPosition: 'left',
  iconColor: 'error',
}

export const WithErrorIconRight: Story<InputProps> = (args) => (
  <Input {...args} />
)
WithErrorIconRight.args = {
  placeholder: 'Placeholder',
  disabled: false,
  isInvalid: true,
  label: 'Enter name',
  helperText: 'Full name',
  icon: <AlertCircle />,
  iconPosition: 'right',
  iconColor: 'error',
}
