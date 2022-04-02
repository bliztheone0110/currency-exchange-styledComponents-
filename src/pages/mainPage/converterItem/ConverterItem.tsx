import React, { FC } from 'react';
import { Button } from '../../../components/UI/Button';
import Container from './../../../components/container/Container';
import { TextArea } from './../../../components/UI/TextArea';
import { Select } from './../../../components/UI/Select';

type ConverterItemProps = {
    inputValue: number,
    currency: string,
    inputHandler: (value: string) => void,
    onChangeCurrency: (currency: string) => void,
    currencyList: string[],
}

const ConverterItem: FC<ConverterItemProps> = (props) => {
    const mainCurrency = ['USD', 'EUR', 'RUB'];

    return (
        <Container type='flex' flexDirection='column' width='300px' margin='0 0 20px 0'>
            <Container type='flex' justifyContent='space-between' width='100%' margin="0 0 5px" padding="0">
                {mainCurrency.map(currency =>
                    <Button width="20%" height='35px' onClick={() => props.onChangeCurrency(currency)}>{currency}</Button>
                )}
                <Select
                    value={props.currency}
                    width="35%"
                    height='35px'
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { props.onChangeCurrency(e.target.value) }}
                >
                    {props.currencyList.map(currency =>
                        <option
                            style={{ display: mainCurrency.indexOf(currency) !== -1 ? 'none' : 'block' }}
                            key={currency} value={currency}
                        >
                            {currency}
                        </option>
                    )}
                </Select>
            </Container>
            <TextArea
                width={'100%'}
                value={props.inputValue}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => props.inputHandler(e.target.value)}
            />
        </Container>
    );
};

export default ConverterItem;