import { ThemeType, appearanceOptions } from '../../../commons/styles/types';

export type ButtonProps = {
  text?: string;
  onPress?: () => void;
  theme?: ThemeType;
  appearance?: appearanceOptions;
  activeOpacity?: number;
  alignText?: 'left' | 'center' | 'right';
  marginBottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  width?: string;
  icon?: JSX.Element;
  alignIcon?: 'left' | 'right';
  alignItems?: 'normal' | 'center';
  className?: string
};

export type TextProps = {
  appearance?: appearanceOptions;
  alignText?: 'left' | 'center' | 'right';
};
