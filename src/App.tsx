import ThemeContext from "./contexts/ThemeContext.tsx";
import {GlobalStyles} from "./styles/globalStyles.ts";
import TestComponent from "./components/uiKit/testComponent/TestComponent.tsx";
import Header from "./components/header/Header.tsx";
import ThemeToggler from "./components/uiKit/themeToggler/ThemeToggler.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {


  return (
      <ThemeContext>
          <GlobalStyles/>
          <BrowserRouter>
              <ThemeToggler/>
              <Header/>
              <TestComponent/>
          </BrowserRouter>
      </ThemeContext>
  )
}

export default App
