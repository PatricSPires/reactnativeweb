import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react-native'
import dark from '../../../styles/customThemes/dark'
import { InputWrapper, TextInput, Icon } from '../styles'
import 'jest-styled-components'

describe('InputWrapper > Style', () => {
  it('should render the InputWrapper with error true', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <InputWrapper isInvalid />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})

describe('TextInput > Style', () => {
  it('should render the TextInput with icon on left position', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <TextInput iconPosition="left" />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the TextInput with icon on right position', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <TextInput iconPosition="right" />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})

describe('Icon > Style', () => {
  it('should render the Icon on left position', () => {
    const { toJSON } = render(<Icon iconPosition="left" iconColor="error" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Icon on right position', () => {
    const { toJSON } = render(<Icon iconPosition="right" iconColor="error" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Icon with error status', () => {
    const { toJSON } = render(<Icon iconColor="error" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Icon with warning status', () => {
    const { toJSON } = render(<Icon iconColor="warning" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Icon with success status', () => {
    const { toJSON } = render(<Icon iconColor="success" />)

    expect(toJSON()).toMatchSnapshot()
  })
})
