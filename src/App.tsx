import './App.css'
import ThemeContext from "./contexts/ThemeContext.tsx";
import CloudHireCard from "./components/uiKit/cloudHireCard/CloudHireCard.tsx";

function App() {


  return (
    <ThemeContext>
        <CloudHireCard></CloudHireCard>
    </ThemeContext>
  )
}

export default App
