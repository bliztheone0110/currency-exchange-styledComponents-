import React, { FC } from 'react';
import { ICurrencyList } from '../../interfaces/ICurrencyData';
import { ICurrencyItem } from '../../interfaces/ICurrencyItem';
import Container from './../../components/container/Container';
import Rateitem from './Rateitem';

type RatesProps = {
    ratesData: ICurrencyItem[],
}

const Rates: FC<RatesProps> = (props) => {
    return (
        <Container type='flex' flexWrap='wrap' alignItems='stretch'>
            {props.ratesData.map(rateItem =>
                rateItem.currency !== 'USD'
                && <Rateitem currency={rateItem.currency} rate={rateItem.rate} />
            )}
        </Container>
    );
};

export default Rates;