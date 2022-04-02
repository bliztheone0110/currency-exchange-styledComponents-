import React, { FC } from 'react';
import styled from 'styled-components';
import dark from './../../img/dark.png'
import light from './../../img/light.png'

const ThemeToggler = styled.div<{ isThemeDark: boolean }>`
    width: 60px;
    height: 28px;
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 5px;
    background-color: #ffffff;
    border: 1px solid #4cc5ee;
    border-radius: 14px;
    margin-bottom: 25px;

    &:hover {
        cursor: pointer;
    }

    & img {
        width: 18px;
    }

    & span {
        width: 22px;
        height: 22px;
        position: absolute;
        border-radius: 50%;
        background: #4cc5ee;
        left: ${({ isThemeDark }) => isThemeDark ? '3px' : '33px'};
        top: 2px;
        transition: 400ms ease-in-out;
        box-shadow: 0px -1px 8px -3px rgba(34, 60, 80, 0.2);
    }
`

type StyledThemeTogglerProps = {
    isThemeDark: boolean;
    changeTheme: () => void;
}

const StyledThemeToggler: FC<StyledThemeTogglerProps> = (props) => {
    return (
        <ThemeToggler isThemeDark={props.isThemeDark} onClick={() => props.changeTheme()}>
            <img src={light} alt='light' />
            <span></span>
            <img src={dark} alt='dark' />
        </ThemeToggler>
    );
};

export default StyledThemeToggler;