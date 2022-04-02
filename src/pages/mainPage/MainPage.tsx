import React, { FC, useState } from 'react';
import { TextArea } from './../../components/UI/TextArea';

type MainPageProps = {
    currencyA: string,
    currencyB: string,
    currencyList: string[],
    onChangeCurrencyA: (str: string) => void;
    onChangeCurrencyB: (str: string) => void;
    ABrate: number;
}

const MainPage: FC<MainPageProps> = (props) => {
    const [inputValueA, setInputValueA] = useState(0)
    const [inputValueB, setInputValueB] = useState(0)

    const inputHandlerA = (value: string): void => {
        const finalValue = value.replace(/\D/g, "");
        let calculatedResult = Number(finalValue) / props.ABrate;

        setInputValueA(Number(finalValue))
        setInputValueB(calculatedResult)
    }

    const inputHandlerB = (value: string): void => {
        const finalValue = value.replace(/\D/g, "");
        let calculatedResult = Number(finalValue) * props.ABrate;

        setInputValueB(Number(finalValue))
        setInputValueA(calculatedResult)
    }

    return (
        <>
            <div>
                <p>currency A</p>
                <select value={props.currencyA} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.onChangeCurrencyA(e.target.value)}>
                    {props.currencyList.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
                <TextArea
                    value={inputValueA}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => inputHandlerA(e.target.value)} />
            </div>

            <div>
                <p>currency B</p>
                <select value={props.currencyB} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.onChangeCurrencyB(e.target.value)}>
                    {props.currencyList.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
                <TextArea value={inputValueB} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => inputHandlerB(e.target.value)} />
            </div>
        </>
    );
};

export default MainPage;