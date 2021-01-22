import React from 'react'
import 'jest-styled-components'
import { render } from '@testing-library/react-native'
import FormGroup from '../index'
import { FormGroupWrapper } from '../styles'

describe('FormGroup > Style', () => {
  it('should render the FormGroup with some styles', () => {
    const { toJSON } = render(<FormGroup tag="input" name="input" />)
    expect(toJSON()).toMatchSnapshot()
  })
})

describe('FormGroupWrapper > Style', () => {
  it('should render the FormGroupWrapper with width', () => {
    const { toJSON } = render(
      <FormGroupWrapper width="100px" marginBottom={2} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the FormGroupWrapper with margin bottom', () => {
    const { toJSON } = render(<FormGroupWrapper marginBottom={2} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
