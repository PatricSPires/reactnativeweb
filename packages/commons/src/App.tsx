import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import DefaultTheme from './styles/customThemes/light'
import { ThemeType } from './styles/types'

type AppProps = {
  theme?: ThemeType
  children: React.ReactNode
}

function App({ theme, children }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {children}
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  )
}

App.defaultProps = {
  theme: DefaultTheme,
}

export default App
