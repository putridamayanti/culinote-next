const BasicThemeColors = {
    primary: {
        main: '#B55D51',
        light: '#FEF5F3',
        dark: '#974E44',
        contrastText: '#FFFFFF'
    },
    secondary: {
        main: '#793337',
        light: '#FEF5F3',
        dark: '#572023',
        contrastText: '#FFFFFF'
    },
    tertiary: {
        main: '#FFF0ED',
        light: '#FFFFFF',
        dark: '#EFCFC8',
        contrastText: '#353535'
    },
};

const LightThemeColors = {
    ...BasicThemeColors,
    success: {
        main: '#13DEB9',
        light: '#e3fdf7',
        dark: '#0B7E69',
        contrastText: '#FFFFFF'
    },
    grey: {
        main: '#41424E',
        contrastText: '#FFFFFF',
        100: '#F1F1F3',
        200: '#D4D5DB',
        300: '#8D8EA0',
        400: '#656679',
        500: '#41424E',
        600: '#383943',
        700: '#21222D'
    },
    text: {
        main: '#2A3547',
        secondary: '#7C8FAC'
    },
    background: {
        default: '#F6F7FB',
        dark: '#f8f9fa',
        paper: '#FFFFFF',
    },
};

const DarkThemeColors = {
    ...BasicThemeColors,
    primary: {
        ...BasicThemeColors.primary,
        light: '#4E2C38'
    },
    secondary: {
        ...BasicThemeColors.secondary,
        light: '#504332'
    },
    text: {
        main: '#FFFFFF',
        primary: '#EAEFF4',
        secondary: '#7C8FAC',
    },
    action: {
        disabledBackground: 'rgba(73,82,88,0.12)',
        hoverOpacity: 0.02,
        hover: '#333F55',
    },
    divider: '#333F55',
    success: {
        main: '#13DEB9',
        light: '#1B3C48',
        dark: '#0B7E69',
        contrastText: '#FFFFFF'
    },
    grey: {
        main: '#41424E',
        contrastText: '#FFFFFF',
        700: '#F1F1F3',
        600: '#D4D5DB',
        500: '#8D8EA0',
        400: '#656679',
        300: '#41424E',
        200: '#383943',
        100: '#21222D'
    },
    background: {
        paper: '#21222D',
        dark: '#171821',
        default: '#171821',
    },
};

export { LightThemeColors, DarkThemeColors };