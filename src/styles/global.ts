import { createGlobalStyle } from "styled-components";
import { baseTheme } from './theme';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: ${baseTheme.durations.ms300}ms;
    }

    body {
        margin: 0;
        padding: 0;
    }
`