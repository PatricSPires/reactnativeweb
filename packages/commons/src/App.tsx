import React from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { AppHeader } from './AppHeader'

export function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <AppHeader />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
