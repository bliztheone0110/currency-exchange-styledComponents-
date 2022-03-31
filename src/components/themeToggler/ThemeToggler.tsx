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
    border: 1px solid lightblue;
    border-radius: 14px;

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
        background: gray;
        left: ${({ isThemeDark }) => isThemeDark ? '4px' : '34px'};
        top: 2px;
        transition: 400ms;
    }
`

type StyledThemeTogglerProps = {
    isThemeDark: boolean;
    changeTheme: () => void;
}

const StyledThemeToggler: FC<StyledThemeTogglerProps> = (props) => {
    return (
        <ThemeToggler isThemeDark={props.isThemeDark} onClick={() => props.changeTheme()}>
            <img src={dark} alt='dark' />
            <span></span>
            <img src={light} alt='light' />
        </ThemeToggler>
    );
};

export default StyledThemeToggler;