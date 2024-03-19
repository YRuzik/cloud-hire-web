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
        accent: "#F0D8FF",
        onAccent: "#1D1D1B",
        brandColor: "#FFFFFF",
        onBrandColor: "#1D1D1B",
        dangerColor: "#FEBED0",
        onDangerColor: "#1D1D1B",
        invertedBorderColor: "#515151",
        secondaryBackgroundColor: "#FAFAFA",
        successColor: "#70dc82",
        onSuccessColor: "#1D1D1B",
        waitingColor: "#FFCE9E",
        onWaitingColor: "#1D1D1B"
    },
}