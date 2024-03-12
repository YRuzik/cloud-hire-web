import ThemeContext from "./contexts/ThemeContext.tsx";
import {GlobalStyles} from "./styles/globalStyles.ts";
import TestComponent from "./components/uiKit/testComponent/TestComponent.tsx";
import Header from "./components/header/Header.tsx";

function App() {


  return (
      <ThemeContext>
          <GlobalStyles/>
          <Header/>
          <TestComponent/>
      </ThemeContext>
  )
}

export default App
