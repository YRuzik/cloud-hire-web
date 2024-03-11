import './App.css'
import ThemeContext from "./contexts/ThemeContext.tsx";
import {GlobalStyles} from "./styles/globalStyles.ts";
import TestComponent from "./components/uiKit/testComponent/TestComponent.tsx";

function App() {


  return (
      <ThemeContext>
          <GlobalStyles/>
          <TestComponent/>
      </ThemeContext>
  )
}

export default App
