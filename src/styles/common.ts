import {IStyles} from "../interfaces/IStyles.ts";
import {Light} from "./themes/light.ts";

export enum Themes {
    light = "Light",
    dark = "Dark"
}

export const themeGetter = (key: Themes): IStyles => {
    switch (key) {
        case (Themes.light):
            return Light
            break;

        default: return Light
    }
}