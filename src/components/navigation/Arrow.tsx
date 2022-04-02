import React, { FC } from 'react';
import styled from 'styled-components';

const Arrow = styled.span<{isNavOpen:boolean}>`
    display: block;
    position: absolute;
    top: calc(50% - 10px);
    right: ${({isNavOpen}) => isNavOpen ? '0' : '5px'};
    width: 10px;
    height: 10px;
    border-top: ${({theme}) => '2px solid' + theme.colors.font};
    border-right: ${({theme}) => '2px solid' + theme.colors.font};
    transform: ${({isNavOpen}) => isNavOpen ? 'rotate(135deg) scaleY(-1)' : 'rotate(45deg)'};

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