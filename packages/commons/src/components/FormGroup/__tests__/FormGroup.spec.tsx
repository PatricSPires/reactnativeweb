import * as React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components'
import { enableStyledComponentsSerializer } from '../../../utils/styled'
import FormGroup from '../index'

import dark from '../../../styles/customThemes/dark'
import light from '../../../styles/customThemes/light'

const props = {
  tag: 'input',
  name: 'input',
  meta: {
    error: 'Error message',
    touched: true,
    active: false,
  },
}

beforeAll(() => {
  enableStyledComponentsSerializer()
})

describe('FormGroup Test', () => {
  it('should render the FormGroup', () => {
    const { toJSON } = render(
      <FormGroup {...props} name="FormGroup" tag="input" />,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with label and dark theme', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <FormGroup
          {...props}
          label="Hello World"
          name="FormGroup"
          tag="input"
        />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with label light theme', () => {
    const { toJSON } = render(
      <ThemeProvider theme={light}>
        <FormGroup
          {...props}
          label="Hello World"
          name="FormGroup"
          tag="input"
        />
      </ThemeProvider>,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with placeholder', () => {
    const { toJSON } = render(
      <FormGroup
        {...props}
        placeholder="Hello World"
        name="FormGroup"
        tag="input"
      />,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with helper text', () => {
    const { toJSON } = render(
      <FormGroup
        {...props}
        helperText="Hello World"
        name="FormGroup"
        tag="input"
      />,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with isInvalid true', () => {
    const { toJSON } = render(
      <FormGroup {...props} name="FormGroup" tag="input" />,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with width 100%', () => {
    const { toJSON } = render(
      <FormGroup {...props} width="100%" name="FormGroup" tag="input" />,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with isInvalid false', () => {
    const customProps = {
      ...props,
      meta: {
        ...props.meta,
        error: undefined,
      },
    }

    const { toJSON } = render(
      <FormGroup {...customProps} name="FormGroup" tag="input" />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with isValid true', () => {
    const customProps = {
      ...props,
      meta: {
        ...props.meta,
        valid: true,
      },
    }

    const { toJSON } = render(
      <FormGroup {...customProps} name="FormGroup" tag="input" />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with labelHint with dark theme', () => {
    const { toJSON } = render(
      <ThemeProvider theme={dark}>
        <FormGroup
          {...props}
          label="Hello World"
          labelHint="Helo FormGroup"
          name="FormGroup"
          tag="input"
        />
      </ThemeProvider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroup with labelHint with light theme', () => {
    const { toJSON } = render(
      <ThemeProvider theme={light}>
        <FormGroup
          {...props}
          label="Hello World"
          labelHint="Helo FormGroup"
          name="FormGroup"
          tag="input"
        />
      </ThemeProvider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
