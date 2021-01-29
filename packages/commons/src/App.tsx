import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import Switch from './components/Switch'
import theme from './styles/customThemes/light'

export function App() {
  const [checked, setChecked] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Switch
            label="Testing"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  )
}
