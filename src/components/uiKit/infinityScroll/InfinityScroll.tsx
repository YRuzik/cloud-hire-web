import styled from "styled-components";
import {FC, useEffect, useRef, useState} from "react";

///TODO found solution for infinity scroll
type infinityScrollProps = {
    imgArray: string[]
}

const InfinityScrollWrapper = styled.div`
    height:150px;
    position:relative;
    overflow:hidden;
`

const InfinityScrollAnimator = styled.div<{offset: number}>`
    position:absolute;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    justify-content: space-between;
    
    animation: bannermove 10s linear infinite;
    @keyframes bannermove {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-${props => `${props.offset / 2}px`}, 0);
        }
    }
`

const InfinityScrollImage = styled.img`
    width: 100%;
    object-fit: contain;
`

const InfinityScroll: FC<infinityScrollProps> = ({imgArray}) => {
    const [offset, setOffset] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollContainerRef) {
            setOffset(scrollContainerRef.current!.scrollWidth)
        }
    }, [scrollContainerRef.current?.scrollWidth, scrollContainerRef]);

    return (
        <InfinityScrollWrapper>
            <InfinityScrollAnimator offset={offset} ref={scrollContainerRef}>
                {imgArray.map((img, i) => <InfinityScrollImage key={i} alt={`${i}`} src={img}/>)}
                {imgArray.map((img, i) => <InfinityScrollImage key={i} alt={`${i}`} src={img}/>)}
            </InfinityScrollAnimator>
        </InfinityScrollWrapper>
    )
}

export default InfinityScroll