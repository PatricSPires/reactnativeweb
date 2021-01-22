import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { Container, Wrapper } from '../styles'
import 'jest-styled-components'

describe('Container > Style', () => {
  it('should render the Container with size small', () => {
    const { toJSON } = render(<Container size="small" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Container with checked true', () => {
    const { toJSON } = render(<Container checked />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Container with disabled true', () => {
    const { toJSON } = render(<Container disabled />)
    expect(toJSON()).toMatchSnapshot()
  })
})

describe('Wrapper > Style', () => {
  it('should render the Wrapper with size small', () => {
    const { toJSON } = render(
      <Wrapper size="small">
        <Text />
      </Wrapper>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Wrapper with size small and checked true', () => {
    const { toJSON } = render(
      <Wrapper size="small" checked>
        <Text />
      </Wrapper>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Wrapper with size large and checked', () => {
    const { toJSON } = render(
      <Wrapper checked size="large">
        <Text />
      </Wrapper>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render the Wrapper with disabled true', () => {
    const { toJSON } = render(
      <Wrapper disabled>
        <Text />
      </Wrapper>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
