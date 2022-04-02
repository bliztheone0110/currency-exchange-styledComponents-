import styled from 'styled-components';

export const SimpleText = styled.span<{large?:boolean,margin?:number,nowrap?:boolean}>`
    display: inline-block;
    color: ${ ({ theme }) => theme.colors.font };
    font-size: ${ ({ theme, large }) => large ? theme.fontSizes.large + 'px' : theme.fontSizes.normal + 'px' };
    transition: ${ ({ theme }) => theme.durations.ms100 + 'ms' };
    margin-bottom: ${ ({ margin = 10 }) => margin + 'px' };
    white-space: ${ ({nowrap}) => nowrap ? 'nowrap' : 'normal' };
`