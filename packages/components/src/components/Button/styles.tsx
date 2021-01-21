import React from 'react'
import styled, { css } from 'styled-components';
import { ButtonProps } from './types';
import { buttonAppearances, textAppearances } from './appearance';
import { ImagePropTypes, Platform, TouchableOpacity, Text } from 'react-native';

type ButtonComponentProps = Pick<ButtonProps, 'appearance' | 'marginBottom' | 'width' | 'alignIcon' | 'alignItems' | 'className'>;
type TextComponentProps = Pick<ButtonProps, 'alignText' | 'appearance'>;
type ButtonComponent1Props = {
  className?: string,
  children?: JSX.Element,
  onPress?: () => void
};

const Button = styled(TouchableOpacity)`
  ${({ appearance }: ButtonComponentProps) => css`
    border: none;
    display: flex;
    flex-direction: ${({ alignIcon }: ButtonComponentProps) => (alignIcon === 'left' ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: ${({ alignItems }: ButtonComponentProps) =>
      alignItems === 'center' ? 'center' : 'space-between'};
    height: 48px;
    max-width: 300px;
    min-width: 48px;
    width: 178px;
    padding: 16px;

    ${Platform.OS === 'web' && `cursor: pointer;`}
    ${!!appearance && buttonAppearances[appearance]()};

    `}
`;

export const ButtonComponent = ({ onPress, className, children, ...props}: ButtonComponent1Props) => {
  return (
    <Button className={className} {...props} as={Platform.OS === 'web' ? 'button': TouchableOpacity} onClick={onPress} onPress={onPress}>
      {children}
    </Button>
  )
}

export const TextComponent = styled(Text)<TextComponentProps>`
 color: #fff;
`;
