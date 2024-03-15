import styled from "styled-components";
import {FC, ReactNode} from "react";
import {StyleConstants} from "../../../styles/themes/light.ts";

export enum ButtonStyles {
    elevatedButton = 1,
    outlinedButton = 2,
    secondaryButton = 3
}

type cloudHireButtonProps = {
    children: ReactNode
    style?: ButtonStyles
}

const CloudHireButtonStyle = styled.button`
    display: inline-block;
    appearance: none;
    text-decoration: none;
    text-align: center;
    padding: 1.4rem 2.75rem;
    font-weight: 500;
    background-color: ${props => props.theme.themeColors.brandColor};
    color: ${props => props.theme.themeColors.onBrandColor};
    border-radius: ${props => props.theme.dimensions.minBorderRadius};
    transition: ${StyleConstants.baseTransition} ease-in-out;
    
    &:hover {
        opacity: 0.8;
    }
`

const CloudHireOutlinedButton = styled(CloudHireButtonStyle)`
    background-color: transparent;
    border: 1px solid ${props => props.theme.themeColors.backgroundColor};
    color: ${props => props.theme.themesColors.backgroundColor};
`

const CloudHireSecondaryButton = styled(CloudHireButtonStyle)`
    background-color: ${props => props.theme.themeColors.backgroundColor};
    color: ${props => props.theme.textColors.textColor};
`

const CloudHireButton: FC<cloudHireButtonProps> = ({style = ButtonStyles.elevatedButton, children}) => {
    switch (style) {
        case ButtonStyles.outlinedButton:
            return <div>
                <CloudHireOutlinedButton>
                    {children}
                </CloudHireOutlinedButton>
            </div>
        case ButtonStyles.secondaryButton:
            return <div>
                <CloudHireSecondaryButton>
                    {children}
                </CloudHireSecondaryButton>
            </div>
        default: return <div>
            <CloudHireButtonStyle>
                {children}
            </CloudHireButtonStyle>
        </div>
    }
}

export default CloudHireButton