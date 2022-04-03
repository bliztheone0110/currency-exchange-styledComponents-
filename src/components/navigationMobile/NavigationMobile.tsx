import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggler from './../themeToggler/ThemeToggler';
import { Text } from '../UI/Text';

const NavigationMobile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.contentBackground};
    border-bottom: 2px solid #000000;
    padding: 7.5px;

    & a {
        color: ${({ theme }) => theme.colors.font};
        margin: 0 5px;
    }

    & nav {
        margin-left: 5px;
    }
`

type StyledNavigationProps = {
    changeTheme: () => void;
    isThemeDark: boolean;
}

const StyledNavigationMobile: FC<StyledNavigationProps> = (props) => {
    return (
        <NavigationMobile>
            <ThemeToggler isThemeDark={props.isThemeDark} changeTheme={props.changeTheme} />
            <nav>
                <Link to='./'>
                    <Text margin={0}>Обменник валют</Text>
                </Link>
                <Link to='./rates'>
                    <Text margin={0}>Курсы валют</Text>
                </Link>
            </nav>
        </NavigationMobile>
    );
};

export default StyledNavigationMobile;