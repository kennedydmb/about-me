import './App.css';
import Sidebar from "./Components/Sidebar.jsx"
import Main from "./Components/Main.jsx"
import Wrapper from "./Components/Wrapper.jsx"

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
}

export default App;
