import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ThemeToggler from './../themeToggler/ThemeToggler';

const Navigation = styled.nav`
    padding: 20px;

    & a {
        display: block;
        color: black;
    }
`

type StyledNavigationProps = {
    changeTheme: () => void;
    isThemeDark: boolean;
}

const StyledNavigation: FC<StyledNavigationProps> = (props) => {
    return (
        <Navigation>
            <ThemeToggler isThemeDark={props.isThemeDark} changeTheme={props.changeTheme} />
            <Link to='./'>Обменник валют</Link>
            <Link to='./rates'>Курсы валют</Link>
        </Navigation>
    );
};

export default StyledNavigation;