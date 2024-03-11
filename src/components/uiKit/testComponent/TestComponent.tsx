import CloudHireCard from "../cloudHireCard/CloudHireCard.tsx";
import Text from "../text/Text.tsx";
import {useContext} from "react";
import {ThemeContext} from "styled-components";
import {IStyles} from "../../../interfaces/IStyles.ts";

const TestComponent = () => {
    const styles = useContext(ThemeContext) as IStyles
    return (
        <>
            <Text>
                <h1>Мой текст My TEXT</h1>
            </Text>
            <Text color={styles.textSecondaryColor}>
                <p>Мой текст My TEXT</p>
            </Text>
            <CloudHireCard>
                <Text color={styles?.invertedTextColor}>
                    <h1>Мой текст My text</h1>
                </Text>
            </CloudHireCard>
        </>
    )
}

export default TestComponent