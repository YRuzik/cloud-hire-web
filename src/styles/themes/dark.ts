import {BaseColors, BaseDimensions} from "./light.ts";
import {DefaultTheme} from "styled-components";

export const Dark: DefaultTheme = {
    baseColors: BaseColors,
    cardColors: {
        cardColor: "#FFFFFF",
        cardSecondaryColor: "#2E2E2E"
    },
    dimensions: BaseDimensions,
    inputColors: {
        backgroundColor: '#FFFFFF',
        borderColor: '#CECECE'
    },
    textColors: {
        brandedTextColor: "#FFFFFF",
        invertedTextColor: "#1D1D1B",
        textColor: "#FFFFFF",
        textSecondaryColor: "#5E5E5D"
    },
    themeColors: {
        backgroundColor: "#1D1D1B",
        borderColor: "#D3D3D3",
        brandColor: "#FFFFFF",
        onBrandColor: "#1D1D1B",
        dangerColor: "#FEBED0",
        invertedBorderColor: "#515151",
        secondaryBackgroundColor: "#FAFAFA",
        successColor: "#D0E8D4",
        waitingColor: "#FFCE9E"
    },
}