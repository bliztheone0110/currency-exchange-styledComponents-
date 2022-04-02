import styled from 'styled-components';

export const Button = styled.button<{width?: string,height?: string,padding?: string,borderRadius?: string,}>`
    width: ${({width = '80px'}) => width};
    height: ${({height = '20px'}) => height};
    padding: ${({padding = '5px 5px'}) => padding};
    color: ${({ theme }) => theme.colors.font};
    font-size: ${ ({ theme }) => theme.fontSizes.normal + 'px' };
    background-color: ${({ theme }) => theme.colors.contentBackground};
    border: 1px solid #000000;
    border-radius: ${({ borderRadius = '3px' }) => borderRadius};
    transition: 300ms;

    &:active, &:focus, &:hover {
        outline: 0;
        cursor: pointer;
    }
`