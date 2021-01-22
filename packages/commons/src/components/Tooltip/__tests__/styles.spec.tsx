import React from 'react'
import 'jest-styled-components'
import { render } from '@testing-library/react-native'
import Tooltip from '../index'
import {} from '../styles'

describe('Tooltip > Style', () => {
  it('should render the Tooltip with some styles', () => {
    const { toJSON } = render(<Tooltip hint="Hello World" />)
    expect(toJSON()).toMatchSnapshot()
  })
})
