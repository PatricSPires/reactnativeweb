import * as React from 'react'
import { render } from '@testing-library/react-native'
import { enableStyledComponentsSerializer } from '../../../utils/styled'

import Button from '..'

beforeAll(() => {
  enableStyledComponentsSerializer()
})

describe('Button Test', () => {
  it('should render the button', () => {
    const { toJSON } = render(
      <Button
        appearance="primary"
        onPress={() => console.log('Pressed')}
        marginBottom={3}
      />,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the button with text and appearance primary', () => {
    const { toJSON } = render(<Button text="Button" appearance="primary" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the button with text and appearance secondary', () => {
    const { toJSON } = render(<Button text="Button" appearance="secondary" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the button with text and appearance tertiary', () => {
    const { toJSON } = render(<Button text="Button" appearance="tertiary" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the button with text and appearance ghost', () => {
    const { toJSON } = render(<Button text="Button" appearance="ghost" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the button with text and appearance danger', () => {
    const { toJSON } = render(<Button text="Button" appearance="danger" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the button with text and appearance disabled', () => {
    const { toJSON } = render(<Button text="Button" appearance="disabled" />)

    expect(toJSON()).toMatchSnapshot()
  })
})
