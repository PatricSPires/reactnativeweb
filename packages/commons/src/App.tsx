import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { AppHeader } from './AppHeader'
import Title from './components/Title'
import Switch from './components/Switch'

export function App() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <AppHeader />

          <Title>olá!</Title>
          <Switch
            label="Testing"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
