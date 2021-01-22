import { css } from 'styled-components'
import { Platform } from 'react-native'
// import theme from '../../../commons/styles/theme';

export const buttonAppearances = {
  primary: () => css`
    background-color: ${Platform.OS === 'web' ? 'green' : 'fuchsia'};
  `,
  danger: () => css`
    background-color: red;
  `,
}

export const textAppearances = {
  primary: () => css`
    color: #fff;
  `,
}
