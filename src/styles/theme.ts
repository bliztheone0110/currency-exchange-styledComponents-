import { ITheme, ThemeEnum } from './../interfaces/ITheme';
import { DefaultTheme } from 'styled-components'

export const baseTheme: ITheme = {
    colors: {
        header: '#fafafa',
        bodyBackground: '#033968',
        contentBackground: '#c9deff',

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

    fontSizes: {
        normal: 16,
        large: 20,
        title: 24,
    },

    durations: {
        ms100: 100,
        ms300: 300,
    },
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        header: '#a0a5ee',
        bodyBackground: '#033968',
        contentBackground: '#2b2b2b',

        font: '#f9f9f9',
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

    fontSizes: {
        normal: 16,
        large: 20,
        title: 24,
    },

    durations: {
        ms100: 100,
        ms300: 300,
    },
}


export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,

    colors: {
        header: '#fafafa',
        bodyBackground: '#f9f9f9',
        contentBackground: '#c9deff',

        font: '#0b0b0b',
    },

    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    fontSizes: {
        normal: 16,
        large: 20,
        title: 24,
    },

    sizes: {
        nav: { width: 250 },
        container: { width: 1140 }
    },

    durations: {
        ms100: 100,
        ms300: 300,
    },
}

