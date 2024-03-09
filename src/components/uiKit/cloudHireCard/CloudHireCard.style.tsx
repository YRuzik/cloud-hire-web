import styled from "styled-components";

export const CardWrapper = styled.div`
    background-color: ${props => {
        console.log(props.theme)
        return props.theme.cardColor}};
`