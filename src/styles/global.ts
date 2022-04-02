import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme  }) => theme.colors.bodyBackground};
        color: ${({ theme  }) => theme.colors.font};
        transition: ${({ theme }) => theme.durations.ms300 + 'ms'};
    }
`