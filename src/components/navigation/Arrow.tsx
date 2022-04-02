import React, { FC } from 'react';
import styled from 'styled-components';

const Arrow = styled.span<{isNavOpen:boolean}>`
    display: block;
    position: absolute;
    top: calc(50% - 10px);
    right: ${({isNavOpen}) => isNavOpen ? '5px' : '0'};
    width: 10px;
    height: 10px;
    border-top: ${({theme}) => '2px solid' + theme.colors.font};
    border-right: ${({theme}) => '2px solid' + theme.colors.font};
    transform: ${({isNavOpen}) => isNavOpen ? 'rotate(45deg)' : 'rotate(135deg) scaleY(-1);'};
    transition: 300ms;

    &:hover {
        cursor: pointer;
    }
`

type ArrowProps = {
    toggleNavVisibility: () => void;
    isNavOpen: boolean;
}

const StyledArrow: FC<ArrowProps> = (props) => {
    return (
        <Arrow isNavOpen={props.isNavOpen} onClick={() => props.toggleNavVisibility()}/>
    )
}

export default StyledArrow;