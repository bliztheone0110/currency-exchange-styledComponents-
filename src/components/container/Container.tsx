import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
    type: 'default' | 'flex',
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
    flexDirection?: 'row' | 'column',
    justifyContent?: string
    alignItems?: string
}

const Container = styled.div<ButtonProps>`
    ${({
        type = 'default',
        flexWrap = 'nowrap',
        flexDirection = 'row',
        justifyContent = 'flex-start',
        alignItems = 'flex-start'
    }) => {
        switch (type) {
            case 'default':
                return css`
                    max-width: ${({ theme }) => theme.sizes.container.width + 'px'};
                    margin: 0 auto;
                `
            case 'flex':
                return css`
                    display: flex;
                    max-width: ${({ theme }) => theme.sizes.container.width + 'px'};
                    margin: 0 auto;
                    flex-direction: ${flexDirection};
                    flex-wrap: ${flexWrap};
                    justify-content: ${justifyContent};
                    align-items: ${alignItems};
                `
            }
        }
    }
`

export default Container;