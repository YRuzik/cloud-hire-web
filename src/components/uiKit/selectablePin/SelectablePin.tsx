import styled from "styled-components";
import {FC} from "react";
import Text from "../text/Text.tsx";

type selectablePinProps = {
    title: string
}

const SelectablePinWrapper = styled.button`
    background-color: ${props => props.theme.cardColors.cardSecondaryColor};
    border-color: ${props => props.theme.themeColors.invertedBorderColor};
    border-style: solid;
    border-width: 1px;
    color: ${props => props.theme.textColors.brandedTextColor};
    border-radius: ${props => props.theme.dimensions.maxBorderRadius};
    display: flex;
    align-items: center;
    padding: 5px 7px;
    gap: 5px;
`

const DotContainer = styled.div`
    width: 6px;
    height: 6px;
    border-radius: ${props => props.theme.dimensions.maxBorderRadius};
    border-color: ${props => props.theme.themeColors.invertedBorderColor};
    border-style: solid;
    border-width: 1px;
`

const SelectablePin: FC<selectablePinProps> = ({title}) => {
    return (
        <SelectablePinWrapper>
            <DotContainer/>
            <Text fontWeight={500}>
                {title}
            </Text>
        </SelectablePinWrapper>
    )
}

export default SelectablePin