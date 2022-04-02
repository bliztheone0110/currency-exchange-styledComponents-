export interface ICurrencyList {
    [key: string]: number
}

export interface ICurrencyData {
    success: boolean,
    terms: string,
    privacy: string,
    timestamp: number,
    source: string,
    quotes: ICurrencyList
}