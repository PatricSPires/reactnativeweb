import React from 'react'
import { render } from '@testing-library/react-native'
import { RadioButtonCheck, RadioButtonText } from '../styles'
import 'jest-styled-components'

describe('RadioButtonCheck > Style', () => {
  it('should render the RadioButtonCheck with checked true and disabled true', () => {
    const { toJSON } = render(<RadioButtonCheck checked disabled />)
    expect(toJSON()).toMatchSnapshot()
  })
})

describe('RadioButtonText > Style', () => {
  it('should render the RadioButtonText with disabled true', () => {
    const { toJSON } = render(<RadioButtonText disabled />)
    expect(toJSON()).toMatchSnapshot()
  })
})
