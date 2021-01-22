import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Checkbox from './index'
import { CheckboxProps } from './types'

export default {
  title: 'Formulário/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'Este é o nosso componente de checkbox, que possui alguns estilos com base nas propriedades e estados.',
      },
    },
  },
  args: {
    children: 'Place your text here',
    checked: false,
    disabled: false,
  },
  argTypes: {
    onPress: {
      action: 'clicked',
      description: 'Muda o estado do componente para verdadeiro ou falso.',
    },
    children: {
      description: 'Texto que acompanha o checkbox. Não é obrigatório.',
    },
    checked: {
      description: 'Alterna o estado do componente entre verdadeiro e falso.',
    },
    disabled: {
      description:
        'Altera o estado do componente para desabilitado e não permite clique.',
    },
  },
}

export const Basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Active = Basic.bind({})
Active.parameters = {
  docs: {
    description: {
      story:
        'Estado do componente quando está com a propriedade __checked__:true.',
    },
  },
}

Active.args = {
  checked: true,
}

export const Disabled = Basic.bind({})
Disabled.parameters = {
  docs: {
    description: {
      story:
        'Estado do componente quando está com a propriedade __disabled__:true.',
    },
  },
}

Disabled.args = {
  disabled: true,
  checked: false,
}

export const ActiveDisabled = Basic.bind({})
ActiveDisabled.parameters = {
  docs: {
    description: {
      story:
        'Estado do componente quando está com a propriedade __disabled__:true e __checked__:true.',
    },
  },
}

ActiveDisabled.args = {
  disabled: true,
  checked: true,
}
