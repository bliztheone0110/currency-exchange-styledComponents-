import 'styled-components';
import { ITheme, ThemeEnum } from './interfaces/ITheme';
import { DefaultTheme } from './styled.d';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
      type: ThemeEnum
  }
}