import React, { FC } from 'react';

type MainPageProps = {
    currencyA: string,
    currencyB: string,
    currencyList: string[],
    onChangeCurrencyA: (str: string) => void;
    onChangeCurrencyB: (str: string) => void;
}

const MainPage: FC<MainPageProps> = (props) => {
    return (
        <>
            <div>
                <p>currency A</p>
                <select value={props.currencyA} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.onChangeCurrencyA(e.target.value)}>
                    {props.currencyList.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
            </div>

            <div>
                <p>currency B</p>
                <select value={props.currencyB} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.onChangeCurrencyB(e.target.value)}>
                    {props.currencyList.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
            </div>
        </>
    );
};

export default MainPage;