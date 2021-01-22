import * as React from 'react'
import { render } from '@testing-library/react-native'
import Tooltip from '../index'
import { enableStyledComponentsSerializer } from '../../../utils/styled'

beforeAll(() => {
  enableStyledComponentsSerializer()
})

describe('Tooltip Test', () => {
  it('should render the Tooltip', () => {
    const { toJSON } = render(<Tooltip hint="Hello World" />)

    expect(toJSON()).toMatchSnapshot()
  })
})
