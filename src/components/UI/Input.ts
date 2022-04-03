import styled from 'styled-components';

export const InputText = styled.input<{width?: string,height?: string,margin?: string,}>`
    width: ${({width = '300px'}) => width};
    height: ${({height = '40px'}) => height};
    padding: 5px 10px;
    color: ${ ({ theme }) => theme.colors.font };
    font-size: ${ ({ theme }) => theme.fontSizes.large + 'px' };
    background-color: ${({ theme }) => theme.colors.contentBackground};
    border: 2px solid #000000;
    margin: ${({margin = '0'}) => margin};
`