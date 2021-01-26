import styled, {css} from 'styled-components/native';
import {InputProps} from './types';

export const Label = styled.Text`
  color: #f4f4f4;
  margin-bottom: 8px;
`;

export const HelperText = styled.Text`
  color: #f4f4f4;
  margin: 2px 0 8px;
`;

export const TextInputView = styled.View`
  padding: 11px 16px;
  background-color: #f4f4f4;
  width: 288px;

  ${({isInvalid}: InputProps) => css`
    border: ${isInvalid ? '2px solid' : 'none'};
    border-color: ${isInvalid ? 'red' : '#8d8d8d'};
    border-bottom-width: 2px;
    border-bottom-color: ${isInvalid ? 'red' : '#8d8d8d'};
  `}
`;

export const TextInputComponent = styled.TextInput`
  padding: 0px;
  color: #161616;
`;
