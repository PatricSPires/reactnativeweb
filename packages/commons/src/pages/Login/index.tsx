import React from 'react'
import { Text } from 'react-native'

import App from '../../App'
import theme from '../../styles/customThemes/dark'

import Input from '../../components/Input'
import Button from '../../components/Button'
import FormGroup from '../../components/FormGroup'
import Logo from '../../assets/images/logo.svg'

import { Page, LoginWrapper } from './styles'

const Login = () => {
  return (
    <App theme={theme}>
      <Page>
        <LoginWrapper>
          <Logo />
          <FormGroup
            tag={Input}
            name="email"
            label="E-mail"
            placeholder="E-mail"
            marginBottom={3}
            isInvalid
          />
          <FormGroup
            tag={Input}
            name="password"
            label="Senha"
            marginBottom={6}
            passwordField
          />
          <Button
            text="Entrar"
            appearance="primary"
            onPress={() => alert('logado')}
            alignItems="center"
          />
        </LoginWrapper>
      </Page>
    </App>
  )
}

export default Login
