import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggler from './../themeToggler/ThemeToggler';
import Arrow from './Arrow';
import { Text } from '../UI/Text';

const Navigation = styled.div<{isNavOpen: boolean}>`
    position: relative;
    width: 100%;
    max-width: ${({isNavOpen}) => isNavOpen ? '200px' : '10px'};
    background-color: ${({ theme }) => theme.colors.contentBackground};
    border: 2px solid #000000;
    border-radius: 5px;
    padding: ${({isNavOpen}) => isNavOpen ? '20px' : '20px 0 20px 15px'};
    margin-top: 20px;
    overflow: hidden;
    transition: 300ms;

    & * {
        display: ${({isNavOpen}) => isNavOpen ? '' : '0'};
        transition: 100ms;
    }

    & a {
        display: block;
        color: ${({ theme }) => theme.colors.font};
        opacity: 1;
    }
`

type StyledNavigationProps = {
    changeTheme: () => void;
    isThemeDark: boolean;
    isNavOpen: boolean;
    toggleNavVisibility: () => void;
}

const StyledNavigation: FC<StyledNavigationProps> = (props) => {
    return (
        <Navigation isNavOpen={props.isNavOpen}>
            <ThemeToggler isThemeDark={props.isThemeDark} changeTheme={props.changeTheme} />
            <nav>
                <Link to='./'>
                    <Text nowrap >Обменник валют</Text>
                </Link>
                <Link to='./rates'>
                    <Text nowrap margin={0}>Курсы валют</Text>
                </Link>
            </nav>
            <Arrow isNavOpen={props.isNavOpen} toggleNavVisibility={props.toggleNavVisibility} />
        </Navigation>
    );
};

export default StyledNavigation;