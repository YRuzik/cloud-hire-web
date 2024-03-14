import styled from "styled-components";
import {FC, memo} from "react";
import Text from "../text/Text.tsx";
import {StyleConstants} from "../../../styles/themes/light.ts";

type selectablePinProps = {
    title: string
    isSelected: boolean
    onClick: () => void
}

const DotContainer = styled.div<{isSelected: boolean}>`
    width: 6px;
    height: 6px;
    border-radius: ${props => props.theme.dimensions.maxBorderRadius};
    border-color: ${props => props.isSelected ? props.theme.themeColors.brandColor : props.theme.themeColors.invertedBorderColor};
    border-style: solid;
    border-width: 1px;
    background-color: ${props => props.isSelected && props.theme.themeColors.brandColor};
    transition: ${StyleConstants.baseTransition} ease-in-out;
`

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
    gap: 0.4rem;

    &:hover ${DotContainer} {
        border-color: ${props => props.theme.themeColors.brandColor};
        background-color: ${props => props.theme.themeColors.brandColor};
    }
`

const SelectablePin: FC<selectablePinProps> = memo(({title, isSelected, onClick}) => {
    return (
        <SelectablePinWrapper onClick={onClick}>
            <DotContainer isSelected={isSelected}/>
            <Text fontWeight={500}>
                {title}
            </Text>
        </SelectablePinWrapper>
    )
})

export default SelectablePin