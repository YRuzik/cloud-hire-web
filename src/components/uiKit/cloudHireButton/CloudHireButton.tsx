import styled from "styled-components";
import {IButtonDecoration} from "../../../interfaces/IStyles.ts";
import {FC, ReactNode} from "react";

type cloudHireButtonProps = {
    children: ReactNode
    decoration: IButtonDecoration
}

const CloudHireButtonStyle = styled.button<{decoration?: IButtonDecoration}>`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: ${props => props.decoration?.backgroundColor};
    color: ${props => props.decoration?.color};
    border-radius: ${props => props.decoration?.borderRadius};
    border: ${props => props.decoration?.border};
`

const CloudHireButton: FC<cloudHireButtonProps> = ({decoration, children}) => {
    return (
        <CloudHireButtonStyle decoration={decoration}>
            {children}
        </CloudHireButtonStyle>
    )
}

export default CloudHireButton