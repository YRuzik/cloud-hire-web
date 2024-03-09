import {IStyles} from "../../interfaces/IStyles.ts";
import {BaseColors, CommonStyles} from "./light.ts";

export const Dark: IStyles = {
    backgroundColor: BaseColors.darkWhite,
    borderColor: BaseColors.lightGray,
    borderRadius: CommonStyles.defaultRadius,
    brandColor: BaseColors.black,
    brandedTextColor: BaseColors.darkBlack,
    cardColor: BaseColors.blue,
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