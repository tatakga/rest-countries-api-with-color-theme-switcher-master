import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    </BrowserRouter>
  );
};

export default App;
