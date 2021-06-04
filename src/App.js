import './App.css';
import Sidebar from "./Components/Sidebar"
import Main from "./Components/Main"
import Wrapper from "./Components/Wrapper"

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <Main />
    </Wrapper>
  );
}

export default App;
