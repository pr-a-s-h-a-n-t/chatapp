import "./App.css";
import Navs from "./Navs";
import { DarkProvider } from "./contex/darkModeContex";
function App() {
  return (
    <div className="App">
      <DarkProvider>
        <Navs />
      </DarkProvider>
    </div>
  );
}

export default App;
