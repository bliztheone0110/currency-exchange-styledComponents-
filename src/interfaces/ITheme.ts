export enum ThemeEnum {
  light = "light",
  dark = "dark"
}

export interface ITheme {
    colors: {
      header: string
      bodyBackground: string
      
      font: string,
    }
  
    media: {
      extraLarge: string
      large: string
      medium: string
      small: string
    }
  
    sizes: {
      nav: { width: number }
      container: { width: number }
    }
  
    durations: {
      ms300: number
    }
  }