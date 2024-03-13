import {Route, Routes} from "react-router-dom";
import TestComponent from "../components/uiKit/testComponent/TestComponent.tsx";

const Paths = () => {
    return (
        <Routes>
            <Route path={"/"} element={<TestComponent/>}/>
        </Routes>
    )
}

export default Paths