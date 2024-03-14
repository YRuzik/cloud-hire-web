import 'styled-components';
import {IBaseColors, IDimensions} from "../interfaces/IStyles.ts";

declare module "styled-components" {
    export interface DefaultTheme {
        themeColors: {
            backgroundColor: string;
            secondaryBackgroundColor: string;
            brandColor: string;
            onBrandColor: string;

            borderColor: string;
            invertedBorderColor: string;

            successColor: string;
            onSuccessColor: string;

            dangerColor: string;
            onDangerColor: string;

            waitingColor: string;
            onWaitingColor: string;
        },
        dimensions: IDimensions,
        inputColors: {
            borderColor: string;
            backgroundColor: string;
        }
        cardColors: {
            cardColor: string;
            cardSecondaryColor: string;
        },
        textColors: {
            textColor: string;
            brandedTextColor: string;
            invertedTextColor: string;
            textSecondaryColor: string;
        },
        baseColors: IBaseColors
    }
}