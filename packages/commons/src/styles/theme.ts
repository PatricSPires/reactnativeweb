import { ThemeType } from './types'

const theme: ThemeType = {
  colors: {
    primary_background: '#ffffff',
    primary_container_background: '#f4f4f4',
    primary_subtle_border: '#e0e0e0',
    medium_contrast_border: '#8d8d8d',
    high_contrast_border: '#161616',
    primary: '#001489',
    primary_color_light: '#0043CE',
    primary_color_dark: '#001148',
  },
  supportColors: {
    error: '#DA1E28',
    error_medium: '#BA1B23',
    error_dark: '#750E13',
    success: '#24A148',
    warning: '#F1C21B',
    information: '#0043CE',
  },
  highContrastColors: {
    danger_high_contrast: '#FA4D56',
    success_high_constrast: '#42BE65',
    warning_high_contrast: '#F1C21B',
    information_high_contrast: '#4589FF',
  },
  fontSize: {
    code_01: '12px',
    code_02: '14px',
    label_01: '12px',
    caption_01: '12px',
    helper_text_01: '12px',
    body_short_01: '14px',
    body_short_02: '16px',
    body_long_01: '14px',
    body_long_02: '16px',
    productive_heading_01: '14px',
    productive_heading_02: '16px',
    productive_heading_03: '20px',
    productive_heading_04: '28px',
    productive_heading_05: '32px',
    productive_heading_06: '42px',
    productive_heading_07: '54px;',
  },
  padding: {
    button: '16px',
  },
  buttonSize: {
    tiny: '82px',
    small: '97px',
    medium: '117px',
    large: '138px',
    giant: '152px',
  },
  iconSize: {
    tiny: '10px',
    small: '12px',
    medium: '17px',
    large: '20px',
    giant: '20px',
  },
  spacings: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '48px',
    6: '56px',
    7: '64px',
  },
}

export default theme
