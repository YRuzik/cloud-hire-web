import WelcomeBlock from "../components/landing/welcomeBlock/WelcomeBlock.tsx";
import Padding from "../components/uiKit/padding/Padding.tsx";

const Landing = () => {
    return (
        <>
            <Padding customPadding={"150px 0 0 0"}>
                <WelcomeBlock/>
            </Padding>
        </>
    )
}

export default Landing