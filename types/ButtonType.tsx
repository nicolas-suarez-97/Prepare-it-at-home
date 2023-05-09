export interface ButtonType {
  label: string
  url: string
  onClick?: any
  layout: ButtonLayout
  newPage: boolean
  prefixIcon?: string
  sufixIcon?: string
  className?: string
}

export enum ButtonLayout {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  UNDERLINE = 'underline',
}

