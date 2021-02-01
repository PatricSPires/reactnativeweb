import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { ThemeProps } from '../../styles/types'

export const Page = styled.SafeAreaView`
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.primary_container_background};
  display: flex;
  justify-content: center;
  align-items: center;

  ${Platform.OS === 'web' ? 'width: 100vw; height: 100vh;' : 'height: 100%'}
`
export const LoginWrapper = styled.View`
  max-width: 480px;
  padding: 44px 96px;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`
