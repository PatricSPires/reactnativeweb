import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'
import {
  CheckBoxWrapper,
  CheckBoxCheck,
  Container,
  CheckBoxText,
} from '../styles'
import 'jest-styled-components'

describe('CheckBoxWrapper > Style', () => {
  it('should render the CheckBoxWrapper with checked true and disabled false', () => {
    const { toJSON } = render(<CheckBoxWrapper checked disabled={false} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the CheckBoxWrapper with checked false and disabled true', () => {
    const { toJSON } = render(<CheckBoxWrapper checked={false} disabled />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the CheckBoxWrapper with checked true and disabled true', () => {
    const { toJSON } = render(<CheckBoxWrapper checked disabled />)
    expect(toJSON()).toMatchSnapshot()
  })
})

describe('CheckBoxCheck > Style', () => {
  it('should render the CheckBoxCheck with checked true and disabled false', () => {
    const { toJSON } = render(<CheckBoxCheck checked disabled={false} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the CheckBoxCheck with checked false and disabled true', () => {
    const { toJSON } = render(<CheckBoxCheck checked={false} disabled />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the CheckBoxCheck with checked true and disabled true', () => {
    const { toJSON } = render(<CheckBoxCheck checked disabled />)
    expect(toJSON()).toMatchSnapshot()
  })
})

describe('Container > Style', () => {
  it('should render the Container with disabled false', () => {
    const { toJSON } = render(
      <Container disabled={false}>
        <View />
      </Container>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})

describe('CheckBoxText > Style', () => {
  it('should render the CheckBoxText with disabled true', () => {
    const { toJSON } = render(<CheckBoxText disabled />)
    expect(toJSON()).toMatchSnapshot()
  })
})
