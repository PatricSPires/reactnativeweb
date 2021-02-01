import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'

import Login from './modules/screens/Login'

function App() {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </View>
    </NativeRouter>
  )
}

export default App
