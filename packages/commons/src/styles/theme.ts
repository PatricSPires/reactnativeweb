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
    code_01: '.75rem',
    code_02: '.875rem',
    label_01: '.75rem',
    caption_01: '.75rem',
    helper_text_01: '.75rem',
    body_short_01: '.875rem',
    body_short_02: '1rem',
    body_long_01: '.857rem',
    body_long_02: '1rem',
    productive_heading_01: '.875rem',
    productive_heading_02: '1rem',
    productive_heading_03: '1.25rem',
    productive_heading_04: '1.75rem',
    productive_heading_05: '2rem',
    productive_heading_06: '2.625rem',
    productive_heading_07: '3.375rem',
  },
  padding: {
    button: '1rem',
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
