import ThemeContext from "./contexts/ThemeContext.tsx";
import {GlobalStyles} from "./styles/globalStyles.ts";
import Header from "./components/header/Header.tsx";
import ThemeToggler from "./components/uiKit/themeToggler/ThemeToggler.tsx";
import {BrowserRouter} from "react-router-dom";
import Paths from "./pages/Paths.tsx";

function App() {
  return (
      <ThemeContext>
          <GlobalStyles/>
          <BrowserRouter>
              <ThemeToggler/>
              <Header/>
              <Paths/>
          </BrowserRouter>
      </ThemeContext>
  )
}

export default App
