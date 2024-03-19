import {IBaseColors, IDimensions, IStyleConstants} from "../../interfaces/IStyles.ts";
import {DefaultTheme} from "styled-components";

export const BaseColors: IBaseColors = {
    black: "#1D1D1B",
    gray: "#2E2E2E",
    lightGray: "#ECECEC",
    softBlack: "",
    softBlue: "#DDF2FF",
    softGray: "",
    softGreen: "",
    softOrange: "",
    softPurple: "#F0D8FF",
    softRed: "",
    softWhite: "",
    white: ""
}

export const BaseDimensions: IDimensions = {
    borderRadius: "10px",
    margin: "10px",
    maxBorderRadius: "50px",
    minBorderRadius: "5px",
    minMargin: "2px",
    minPadding: "5px",
    padding: "20px"
}

export const StyleConstants: IStyleConstants = {
    baseTransition: ".1s"
}

export const Light: DefaultTheme = {
    baseColors: BaseColors,
    cardColors: {
        cardColor: "#2E2E2E",
        cardSecondaryColor: "#FFFFFF"
    },
    dimensions: BaseDimensions,
    inputColors: {
        backgroundColor: '#FFFFFF',
        borderColor: '#CECECE'
    },
    textColors: {
        brandedTextColor: "#1D1D1B",
        invertedTextColor: "#FFFFFF",
        textColor: "#1D1D1B",
        textSecondaryColor: "#C4C4C3"
    },
    themeColors: {
        backgroundColor: "#FAFAFA",
        accent: "#F0D8FF",
        onAccent: "#1D1D1B",
        borderColor: "#515151",
        brandColor: "#1D1D1B",
        onBrandColor: "#FAFAFA",
        dangerColor: "#FEBED0",
        onDangerColor: "#1D1D1B",
        invertedBorderColor: "#D3D3D3",
        secondaryBackgroundColor: "#1D1D1B",
        successColor: "#D0E8D4",
        onSuccessColor: "#1D1D1B",
        waitingColor: "#FFCE9E",
        onWaitingColor: "#1D1D1B"
    },
}