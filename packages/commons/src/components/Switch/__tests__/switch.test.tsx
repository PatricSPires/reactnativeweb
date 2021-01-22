import * as React from 'react'
import { render } from '@testing-library/react-native'
import { enableStyledComponentsSerializer } from '../../../utils/styled'

import Switch from '../index'

beforeAll(() => {
  enableStyledComponentsSerializer()
})

describe('Switch render', () => {
  it('should render the switch', () => {
    const { toJSON } = render(<Switch />)

    expect(toJSON).toMatchSnapshot()
  })
})
