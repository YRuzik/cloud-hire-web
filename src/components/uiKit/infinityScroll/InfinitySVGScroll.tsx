import styled from "styled-components";
import InlineSVG from "react-inlinesvg";
import {FC} from "react";

type infinityScrollProps = {
    imgArray: string[]
}

const TagList = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 100px;
`

const Inner = styled.div`
    width: 200%;
    position: absolute;
    height: 100%;
    display: flex;
    
    animation: loop 10s linear infinite;
    white-space: nowrap;
    
    @keyframes loop {
        0% {
            transform: translateX(0);
        }
        
        100% {
            transform: translateX(-50%);
        }
    }
`

const Tag = styled(InlineSVG)`
    height: 100%;
    width: 150px;
    fill: ${props => props.theme.themeColors.brandColor};
`

const Fade = styled.div`
    position: absolute;
    background: linear-gradient(
            90deg,
            ${props => props.theme.themeColors.backgroundColor},
            transparent 20%,
            transparent 80%,
            ${props => props.theme.themeColors.backgroundColor}
    );
    inset: 0;
    pointer-events: none;
`

const InfinitySVGScroll: FC<infinityScrollProps> = ({imgArray}) => {
    return (
        <TagList>
            <Inner>
                {imgArray.map((img) => <Tag src={img}/>)}
                {imgArray.map((img) => <Tag src={img}/>)}
            </Inner>
            <Fade/>
        </TagList>
    )
}

export default InfinitySVGScroll