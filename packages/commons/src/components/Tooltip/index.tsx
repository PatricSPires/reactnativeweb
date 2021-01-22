import React from 'react'
import { AlertCircle } from '@styled-icons/feather/AlertCircle'
import { TooltipProps } from './types'
import { TooltipWrapper, TooltipHint } from './styles'

const Tooltip = ({ hint }: TooltipProps) => (
  <TooltipWrapper>
    <AlertCircle />
    <TooltipHint>{hint}</TooltipHint>
  </TooltipWrapper>
)

export default Tooltip
