import styled from "styled-components";

export const HostingSolutionsWrapper = styled.div`
    background-color: ${props => props.theme.themeColors.secondaryBackgroundColor};
    display: flex;
    flex-direction: column;
`

export const HostingSolutionsCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
`

export const HostingSolutionsHeadline = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const HostingSolutionsHeadlineSize = styled.div`
    width: 35%;
    text-align: center;
`