import { render } from '@testing-library/react-native'
import * as React from 'react'
import { enableStyledComponentsSerializer } from '../../../utils/styled'
import Checkbox from '../index'

beforeAll(() => {
  enableStyledComponentsSerializer()
})

describe('Checkbox Test', () => {
  it('should render the checkbox', () => {
    const { toJSON } = render(<Checkbox label="Checkbox" />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the checkbox with checked true', () => {
    const { toJSON } = render(<Checkbox label="Checkbox" checked />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the checkbox with checked false', () => {
    const { toJSON } = render(<Checkbox label="Checkbox" checked={false} />)

    expect(toJSON()).toMatchSnapshot()
  })
})
