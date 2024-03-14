export interface IBaseColors {
    softGreen: string;
    white: string;
    black: string;
    softBlack: string;
    softRed: string;
    softBlue: string;
    softPurple: string;
    softOrange: string;
    lightGray: string;
    softGray: string;
    gray: string;
    softWhite: string;
}

export interface IDimensions {
    borderRadius: string,
    margin: string,
    maxBorderRadius: string,
    minBorderRadius: string,
    minMargin: string,
    minPadding: string,
    padding: string
}

export interface ICardDecoration {
    border?: IBorderDecoration;
    borderRadius?: string;
    padding?: string;
    margin?: string;
    backgroundColor?: string;
}

export interface IStyleConstants {
    baseTransition: string
}

export interface IBorderDecoration {
    color?: string;
    style?: string;
    size?: string;
}