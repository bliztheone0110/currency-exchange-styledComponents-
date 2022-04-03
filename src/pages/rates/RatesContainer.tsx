import React, { FC, useEffect, useMemo, useState } from 'react';
import { ICurrencyData } from '../../interfaces/ICurrencyData';
import { ICurrencyItem } from '../../interfaces/ICurrencyItem';
import { api } from './../../api/api';
import Rates from './Rates';
import useDebounce from './../../hooks/useDebounce';

const RatesContainer: FC = () => {
    const [ratesData, setRatesData] = useState([] as ICurrencyItem[])
    const [ratesDataToShow, setRatesDataToShow] = useState([] as ICurrencyItem[])
    const [inputValue, setInputValue] = useState('')
    const debounce = useDebounce(inputValue, 250)

    useMemo(() => {
        if (inputValue === '') return setRatesDataToShow(ratesData)

        if (debounce) {
            const dataToShow = ratesData.filter(ratesItem => ratesItem.currency.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)

            setRatesDataToShow(dataToShow)
        } else {
            setRatesDataToShow([])
        }
    }, [debounce])

    useEffect(() => {
        // sadly, free version of API have limited number of requests per month, so I can't make a request on every currency change.
        // api<ICurrencyData>('http://api.currencylayer.com/live?access_key=0fb1f1453c2634cd7a84c736bb3f4292&format=1')

        // use mock for dev
        api<ICurrencyData>('./test.json')
            .then(data => {
                let currencyList = [] as ICurrencyItem[];

                for (let key in data.quotes) {
                    currencyList.push({ currency: key.slice(3), rate: parseFloat(data.quotes[key].toFixed(2)) })
                }

                setRatesData(currencyList)
                setRatesDataToShow(currencyList)
            })
    }, [])

    const inputHandler = (value: string) => {
        setInputValue(value)
    }

    return (
        <Rates ratesData={ratesDataToShow} inputHandler={inputHandler} inputValue={inputValue} />
    );
};

export default RatesContainer;