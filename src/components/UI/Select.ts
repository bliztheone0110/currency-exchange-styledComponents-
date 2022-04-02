
import styled from 'styled-components';

export const Select = styled.select<{width?: string,height?: string,padding?: string,borderRadius?: string,}>`
    width: ${({width = '80px'}) => width};
    height: ${({height = '20px'}) => height};
    padding: ${({padding = '5px 5px'}) => padding};
    color: ${({ theme }) => theme.colors.font};
    font-size: ${ ({ theme }) => theme.fontSizes.normal + 'px' };
    background-color: ${({ theme }) => theme.colors.contentBackground};
    border: 1px solid #000000;
    border-radius: ${({ borderRadius = '3px' }) => borderRadius};
    transition: 300ms;

  option {
    color: black;
    background: ${({ theme }) => theme.colors.contentBackground};
    color: ${({ theme }) => theme.colors.font};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  option[hidden="true"] {
      display: none;
  }
`;