import styled from 'styled-components';

export const TextArea = styled.textarea<{width?: string,height?: string}>`
    width: ${({width = '300px'}) => width};
    height: ${({height = '150px'}) => height};
    padding: 12px 15px;
    color: ${ ({ theme }) => theme.colors.font };
    font-size: ${ ({ theme }) => theme.fontSizes.large + 'px' };
    background-color: ${({ theme }) => theme.colors.contentBackground};
    border: 2px solid #000000;
    resize: none;
`