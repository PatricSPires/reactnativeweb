import { render } from '@testing-library/react-native'
import * as React from 'react'
import { enableStyledComponentsSerializer } from '../../../utils/styled'
import Checkbox from '../index'

beforeAll(() => {
  enableStyledComponentsSerializer()
})

describe('Checkbox Test', () => {
  it('should render the checkbox', () => {
    const { toJSON } = render(<Checkbox />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the checkbox with checked true', () => {
    const { toJSON } = render(<Checkbox checked />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the checkbox with checked false', () => {
    const { toJSON } = render(<Checkbox checked={false} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the checkbox with disabled true', () => {
    const { toJSON } = render(<Checkbox disabled />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the checkbox with disabled false', () => {
    const { toJSON } = render(<Checkbox disabled={false} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the checkbox with children', () => {
    const { toJSON } = render(<Checkbox>Hello World</Checkbox>)

    expect(toJSON()).toMatchSnapshot()
  })
})
