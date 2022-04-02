import React, { FC, useEffect, useMemo, useState } from 'react';
import { ICurrencyData } from '../../interfaces/ICurrencyData';
import MainPage from './MainPage';
import { api } from './../../api/api';
import { ICurrencyList } from './../../interfaces/ICurrencyData';

const MainPageContainer: FC = () => {
  const [currencyA, setCurrencyA] = useState('RUB')
  const [currencyB, setCurrencyB] = useState('USD')
  const [currencyData, setCurrencyData] = useState({} as ICurrencyList)
  const [currencyList, setCurrencyList] = useState([] as string[])
  const [inputValueA, setInputValueA] = useState(0)
  const [inputValueB, setInputValueB] = useState(0)
  const [ABrate, setABrate] = useState(1)

  useEffect(() => {
    // sadly, free version of API have limited number of requests per month, so I can't make a request on every currency change.
    // api<ICurrencyData>('http://api.currencylayer.com/live?access_key=0fb1f1453c2634cd7a84c736bb3f4292&format=1\')

    // use mock for dev
    api<ICurrencyData>('./test.json')
      .then(data => {
        let currencyList = [];

        for (let key in data.quotes) {
          currencyList.push(key.slice(3))
        }

        setCurrencyData(data.quotes)
        setCurrencyList(currencyList)
        setABrate(data.quotes['USDRUB'])
      })
  }, [])

  useMemo(() => {
    let newRateAB = currencyData[`USD${currencyA}`] / currencyData[`USD${currencyB}`]

    setABrate(newRateAB)
  }, [currencyA, currencyB])

  const inputHandlerA = (value: string): void => {
    const finalValue = value.replace(/[^0-9\.]/g, "");
    let calculatedResult = Number(finalValue) / ABrate;

    setInputValueA(Number(finalValue))
    setInputValueB(calculatedResult)
  }

  const inputHandlerB = (value: string): void => {
    const finalValue = value.replace(/[^0-9\.]/g, "");
    let calculatedResult = Number(finalValue) * ABrate;

    setInputValueB(Number(finalValue))
    setInputValueA(calculatedResult)
  }

  const onChangeCurrencyA = (currency: string): void => {
    setCurrencyA(currency)
    setInputValueB(0)
    setInputValueA(0)
  }

  const onChangeCurrencyB = (currency: string): void => {
    setCurrencyB(currency)
    setInputValueB(0)
    setInputValueA(0)
  }

  return (
    <MainPage
      currencyA={currencyA}
      currencyB={currencyB}
      inputValueA={inputValueA}
      inputValueB={inputValueB}
      inputHandlerA={inputHandlerA}
      inputHandlerB={inputHandlerB}
      currencyList={currencyList}
      onChangeCurrencyA={onChangeCurrencyA}
      onChangeCurrencyB={onChangeCurrencyB}
      ABrate={ABrate}
    />
  );
};

export default MainPageContainer;