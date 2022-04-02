export enum ThemeEnum {
  light = "light",
  dark = "dark"
}

export interface ITheme {
    colors: {
      header: string
      bodyBackground: string
      contentBackground: string
      
      font: string
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

    fontSizes: {
      normal: number;
      large: number;
      title: number;
  }
  
    durations: {
      ms100: number
      ms300: number
    }
  }