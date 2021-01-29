import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../styles/customThemes/dark'

import Input from '../../components/Input'
import Button from '../../components/Button'
import FormGroup from '../../components/FormGroup'
import Logo from '../../components/Logo'

import { Page, LoginWrapper } from './styles'

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default Login
