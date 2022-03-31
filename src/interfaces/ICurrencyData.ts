export interface ICurrencyList {
    [key: `USD${string}`]: number
}

export interface ICurrencyData {
    success: boolean,
    terms: string,
    privacy: string,
    timestamp: number,
    source: string,
    quotes: ICurrencyList
}