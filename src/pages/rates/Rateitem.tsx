import React, { FC } from 'react';
import styled from 'styled-components';
import { Text } from './../../components/UI/Text';

const Rateitem = styled.div`
    width: 20%;
    padding: 5px;

    & article {
        height: 100%;
        text-align: left;
        padding: 10px;
        background-color: ${({ theme }) => theme.colors.contentBackground};
        border: 2px solid #000000;
        border-radius: 3px;
    }

    & span {
        display: block;
    }

    @media ${({ theme }) => theme.media.large} {
        width: 25%
    }

    @media ${({ theme }) => theme.media.medium} {
        width: 33.3%
    }

    @media ${({ theme }) => theme.media.small} {
        width: 50%
    }
`

type RateItemProps = {
    currency: string,
    rate: number,
}

const StyledRateitem: FC<RateItemProps> = (props) => {
    return (
        <Rateitem>
            <article>
                <Text large={true} margin={10}>
                    Валюта: {props.currency}
                </Text>
                <Text margin={20}>
                    {props.rate} : USD
                </Text>
            </article>
        </Rateitem>
    );
};

export default StyledRateitem;