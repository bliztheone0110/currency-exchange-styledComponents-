import React, { FC } from 'react';
import ConverterItem from './converterItem/ConverterItem';

type MainPageProps = {
    currencyA: string,
    currencyB: string,
    inputValueA: number,
    inputValueB: number,
    currencyList: string[],
    onChangeCurrencyA: (str: string) => void,
    onChangeCurrencyB: (str: string) => void;
    inputHandlerA: (value: string) => void,
    inputHandlerB: (value: string) => void,
    ABrate: number,
}

const MainPage: FC<MainPageProps> = (props) => {
    return (
        <>
            <ConverterItem
                inputHandler={props.inputHandlerA}
                inputValue={props.inputValueA}
                currency={props.currencyA}
                currencyList={props.currencyList}
                onChangeCurrency={props.onChangeCurrencyA}
            />
            <ConverterItem
                inputHandler={props.inputHandlerB}
                inputValue={props.inputValueB}
                currency={props.currencyB}
                currencyList={props.currencyList}
                onChangeCurrency={props.onChangeCurrencyB}
            />
        </>
    );
};

export default MainPage;