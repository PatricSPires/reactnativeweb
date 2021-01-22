import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { SwitchProps } from './types'
import Switch from './index'

export default {
  title: 'Formulário/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'Este é o nosso componente de switch, que possui alguns estilos com base nas propriedades e estados.',
      },
    },
  },
  args: {
    checked: false,
    disabled: false,
    size: 'large',
  },
  argTypes: {
    onPress: {
      action: 'clicked',
      description: 'Função que será executada quando o componente for clicado.',
    },
    checked: {
      description: 'Alterna o estado do componente entre verdadeiro e falso.',
    },
    disabled: {
      description:
        'Altera o estado do componente para desabilitado e não permite interação do usuário.',
    },
    size: {
      description: 'Altera o tamanho do componente',
    },
  },
}

export const Basic: Story<SwitchProps> = (args) => <Switch {...args} />

export const Checked = Basic.bind({})
Checked.parameters = {
  docs: {
    description: {
      story:
        'Estado do componente quando está com a propriedade __checked__:true',
    },
  },
}

Checked.args = {
  checked: true,
}

export const CheckedAndDisabled = Basic.bind({})
CheckedAndDisabled.parameters = {
  docs: {
    description: {
      story:
        'Estado do componente quando está com a propriedade __checked__:true e __disabled__:true',
    },
  },
}

CheckedAndDisabled.args = {
  disabled: true,
  checked: true,
}
