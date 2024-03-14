import {Route, Routes} from "react-router-dom";
import Landing from "./Landing.tsx";

const Paths = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Landing/>}/>
        </Routes>
    )
}

export default Paths