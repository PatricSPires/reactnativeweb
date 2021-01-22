import * as React from 'react'
import { render } from '@testing-library/react-native'
import RadioButton from '../index'
import { enableStyledComponentsSerializer } from '../../../utils/styled'

beforeAll(() => {
  enableStyledComponentsSerializer()
})

describe('Radio Button Test', () => {
  it('should render the radio button', () => {
    const { toJSON } = render(<RadioButton />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the radio button disabled true', () => {
    const { toJSON } = render(<RadioButton disabled />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the radio button disabled false', () => {
    const { toJSON } = render(<RadioButton disabled={false} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the radio button disabled checked true', () => {
    const { toJSON } = render(<RadioButton checked />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the radio button disabled checked false', () => {
    const { toJSON } = render(<RadioButton checked={false} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the radio button with children', () => {
    const { toJSON } = render(<RadioButton>Hello world</RadioButton>)

    expect(toJSON()).toMatchSnapshot()
  })
})
