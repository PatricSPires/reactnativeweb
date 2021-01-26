import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import Switch from './components/Switch'

import { AppHeader } from './AppHeader'

export function App() {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <AppHeader />
          <Switch
            label="Teste"
            checked={checked}
            onPress={() => setChecked(!checked)}
            justifyContent="flex-start"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
