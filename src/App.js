import "./App.css";
import Navs from "./Navs";
import { DarkProvider } from "./contex/darkModeContex";
// import WebRTC from "../src/components/WebRTC";
import {UserProvider} from './contex/userContex'
import Testing from "./Hoc/index";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <DarkProvider>
          <Navs />
          {/* <Testing /> */}
          {/* <WebRTC /> */}
        </DarkProvider>
      </UserProvider>
    </div>
  );
}

export default App;
