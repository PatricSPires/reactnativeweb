import * as React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components'
import { enableStyledComponentsSerializer } from '../../../utils/styled'

import Input from '..'
import dark from '../../../styles/customThemes/dark'
import light from '../../../styles/customThemes/light'

beforeAll(() => {
  enableStyledComponentsSerializer()
})

describe('Input Test', () => {
  it('should render the Input', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <Input isInvalid={false} passwordField={false} />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Input whith label', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <Input label="Hello World" isInvalid={false} passwordField={false} />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Input whith helper text', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <Input
          helperText="Hello World"
          isInvalid={false}
          passwordField={false}
        />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Input with is invalid', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <Input isInvalid passwordField={false} />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Input with passwordField false', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <Input passwordField={false} isInvalid iconColor="error" />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Input with passwordField true', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <Input passwordField isInvalid={false} iconColor="success" />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})

describe('Input Test with dark theme', () => {
  it('should render the Input', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <Input isInvalid={false} iconColor="success" passwordField={false} />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})

describe('Input Test with light theme', () => {
  it('should render the Input', () => {
    const { toJSON } = render(
      <ThemeProvider theme={light}>
        <Input isInvalid={false} iconColor="success" passwordField={false} />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
