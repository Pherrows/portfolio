import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    box-sizing: border-box;
    background-color: gray;
  }
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </>
  );
}

export default App;
