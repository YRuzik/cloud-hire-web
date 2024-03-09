import {IBaseColors, ICommonStyles, IStyles} from "../../interfaces/IStyles.ts";

export const BaseColors: IBaseColors = {
    black: "#1D1D1B",
    darkBlack: "#1A1A18",
    blue: "#D2E7FF",
    gray: "#2E2E2E",
    green: "#D0E8D4",
    lightGray: "#EDEDED",
    orange: "#FFCE9E",
    purple: "#EED0FF",
    red: "#FEBED0",
    white: "#FFFFFF",
    darkWhite: "#FAFAFA"
}

export const CommonStyles: ICommonStyles = {
    defaultPadding: "10px",
    defaultRadius: "15px",
    margin: "20px",
    maxRadius: "50px",
    minMargin: "15px",
    minPadding: "5px",
    minRadius: "8px"
}

export const Light: IStyles = {
    backgroundColor: BaseColors.darkWhite,
    borderColor: BaseColors.lightGray,
    borderRadius: CommonStyles.defaultRadius,
    brandColor: BaseColors.black,
    brandedTextColor: BaseColors.darkBlack,
    cardColor: BaseColors.gray,
    cardSecondaryColor: BaseColors.lightGray,
    dangerColor: BaseColors.red,
    invertedBorderColor: BaseColors.lightGray,
    invertedTextColor: BaseColors.white,
    margin: CommonStyles.margin,
    maxBorderRadius: CommonStyles.maxRadius,
    minBorderRadius: CommonStyles.minRadius,
    minMargin: CommonStyles.minMargin,
    minPadding: CommonStyles.minPadding,
    onBrandColor: BaseColors.white,
    padding: CommonStyles.defaultPadding,
    secondaryBackgroundColor: BaseColors.black,
    shadowColor: "",
    successColor: BaseColors.green,
    textColor: BaseColors.darkBlack,
    textSecondaryColor: BaseColors.lightGray,
    waitingColor: BaseColors.orange
}