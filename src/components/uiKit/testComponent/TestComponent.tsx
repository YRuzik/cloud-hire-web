import CloudHireCard from "../cloudHireCard/CloudHireCard.tsx";
import Text from "../text/Text.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";

const TestComponent = () => {
    const styles = useContext(ThemeContext)
    return (
        <>
            <Text>
                <h1>Мой текст My TEXT</h1>
            </Text>
            <Text color={styles?.textColors.textSecondaryColor}>
                <p>Мой текст My TEXT</p>
            </Text>
            <CloudHireCard>
                <Text color={styles?.textColors.invertedTextColor}>
                    <h1>Мой текст My text</h1>
                </Text>
            </CloudHireCard>
        </>
    )
}

export default TestComponent