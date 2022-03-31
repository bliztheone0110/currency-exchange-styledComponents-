import { ITheme, ThemeEnum } from './../interfaces/ITheme';
import { DefaultTheme } from 'styled-components'

export const baseTheme: ITheme = {
    colors: {
        header: '#fafafa',
        bodyBackground: '#033968',

        font: '#000000',
    },

    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    sizes: {
        nav: { width: 250 },
        container: { width: 1140 }
    },

    durations: {
        ms300: 300,
    },
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        header: '#a0a5ee',
        bodyBackground: '#a7b8d6',

        font: '#000000',
    },

    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    sizes: {
        nav: { width: 250 },
        container: { width: 1140 }
    },

    durations: {
        ms300: 300,
    },
}


export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,

    colors: {
        header: '#fafafa',
        bodyBackground: '#033968',

        font: '#000000',
    },

    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    sizes: {
        nav: { width: 250 },
        container: { width: 1140 }
    },

    durations: {
        ms300: 300,
    },
}

