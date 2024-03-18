import WelcomeBlock from "../components/landing/welcomeBlock/WelcomeBlock.tsx";
import Padding from "../components/uiKit/padding/Padding.tsx";
import HostingSolutions from "../components/landing/hostingSolutions/HostingSolutions.tsx";

const Landing = () => {
    return (
        <>
            <Padding customPadding={"150px 0 150px 0"}>
                <WelcomeBlock/>
            </Padding>
            <HostingSolutions/>
        </>
    )
}

export default Landing