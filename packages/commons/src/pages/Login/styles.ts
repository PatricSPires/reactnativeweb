import styled from 'styled-components/native'
import { ThemeProps } from '../../styles/customThemes/types'

export const Page = styled.SafeAreaView`
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.primary_container_background};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginWrapper = styled.View`
  max-width: 30rem;
  padding: 2.75rem 6rem;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.313rem;

  /* ${media.lessThan('medium')`
    background-color: transparent;
    padding: 0;
  `} */
`
