import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import reset from "styled-reset";
import Main from "./pages/Main";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    box-sizing: border-box;
    background-color: #eeeeee;
  }
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
