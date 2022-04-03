import React, { FC } from 'react';
import { ICurrencyItem } from '../../interfaces/ICurrencyItem';
import Container from './../../components/container/Container';
import Rateitem from './Rateitem';
import { InputText } from './../../components/UI/Input';

type RatesProps = {
    ratesData: ICurrencyItem[],
    inputValue: string,
    inputHandler: (value: string) => void,
}

const Rates: FC<RatesProps> = (props) => {
    return (
        <>
            <Container type='flex' width='100%' flexWrap='wrap' alignItems='stretch' padding='0'>
                <InputText
                    width='100%'
                    placeholder='search for currency'
                    margin='0 5px 10px'
                    value={props.inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.inputHandler(e.target.value)}
                />
                {props.ratesData.map(rateItem =>
                    rateItem.currency !== 'USD'
                    && <Rateitem currency={rateItem.currency} rate={rateItem.rate} />
                )}
            </Container>
        </>
    );
};

export default Rates;