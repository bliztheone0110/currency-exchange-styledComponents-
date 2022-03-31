import React, { FC } from 'react';
import styled from 'styled-components';
import logo from './../../img/logo.png'

type HeaderProps = {
    logoSize?: string,
}

const HeaderContainer = styled.div<{imgSize?: string, padding?: string}>`
    padding: ${props => props.padding};
    box-shadow: 0 8px 6px -6px black;
    background-color: ${({ theme  }) => theme.colors.header};

    & img {
        display: block;
        width:  ${({imgSize = '85px'}) => imgSize};
        margin: 0 auto;
    }
`

const Header: FC<HeaderProps> = (props) => {
    return (
        <HeaderContainer padding='10px 0'>
            <img src={logo} alt='logo' />
        </HeaderContainer>
    );
};

export default Header;