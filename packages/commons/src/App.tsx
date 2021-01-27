import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { AppHeader } from './AppHeader'
import Title from './components/Title'
import Switch from './components/Switch'
import Button from './components/Button'
import theme from './styles/customThemes/light'

export function App() {
  const [checked, setChecked] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <AppHeader />
          <Switch
            label="Testing"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
          <Button
            appearance="secondary"
            onPress={() => console.log('button')}
            text="Testing"
          />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  )
}
