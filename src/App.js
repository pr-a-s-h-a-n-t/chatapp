import "./App.css";
import Navs from "./Navs";
import { DarkProvider } from "./contex/darkModeContex";
// import WebRTC from "../src/components/WebRTC";
import {UserProvider} from './contex/userContex'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <DarkProvider>
          <Navs />

          {/* <WebRTC /> */}
        </DarkProvider>
      </UserProvider>
    </div>
  );
}

export default App;
