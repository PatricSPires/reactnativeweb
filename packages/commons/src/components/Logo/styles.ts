import styled from 'styled-components/native'
import { ThemeProps } from '../../styles/customThemes/types'

const LogoWrapper = styled.View`
  margin-bottom: ${({ theme }: ThemeProps) => theme.spacings[6]};
`
export default LogoWrapper
