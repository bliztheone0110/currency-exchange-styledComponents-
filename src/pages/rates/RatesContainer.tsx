import React, { useEffect, useState } from 'react';
import { ICurrencyData, ICurrencyList } from '../../interfaces/ICurrencyData';
import { ICurrencyItem } from '../../interfaces/ICurrencyItem';
import { api } from './../../api/api';
import Rates from './Rates';

const RatesContainer = () => {
    const [ratesData, setRatesData] = useState([] as ICurrencyItem[])

    useEffect(() => {
        // sadly, free version of API have limited number of requests per month, so I can't make a request on every currency change.
        // api<ICurrencyData>('http://api.currencylayer.com/live?access_key=0fb1f1453c2634cd7a84c736bb3f4292&format=1\')

        // use mock for dev
        api<ICurrencyData>('./test.json')
            .then(data => {
                let currencyList = [] as ICurrencyItem[];

                for (let key in data.quotes) {
                    currencyList.push({currency: key.slice(3), rate: parseFloat(data.quotes[key].toFixed(2))})
                }

                setRatesData(currencyList)
            })
    }, [])

    return (
        <Rates ratesData={ratesData} />
    );
};

export default RatesContainer;