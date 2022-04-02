import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
    type: 'default' | 'flex',
    width?: string,
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
    flexDirection?: 'row' | 'column',
    justifyContent?: string,
    alignItems?: string,
    padding?: string,
    margin?: string,
}

const Container = styled.div<ButtonProps>`
    ${({
        type = 'default',
        width = 'auto',
        flexWrap = 'nowrap',
        flexDirection = 'row',
        justifyContent = 'flex-start',
        alignItems = 'flex-start',
        padding = '0 20px',
        margin = '0 auto',
    }) => {
        switch (type) {
            case 'default':
                return css`
                    max-width: ${({ theme }) => theme.sizes.container.width + 'px'};
                    width: ${width};
                    padding: ${padding};
                    margin: ${margin};
                `
            case 'flex':
                return css`
                    display: flex;
                    max-width: ${({ theme }) => theme.sizes.container.width + 'px'};
                    width: ${width};
                    margin: 0 auto;
                    flex-direction: ${flexDirection};
                    flex-wrap: ${flexWrap};
                    justify-content: ${justifyContent};
                    align-items: ${alignItems};
                    padding: ${padding};
                    margin: ${margin};
                `
            }
        }
    }
`

export default Container;