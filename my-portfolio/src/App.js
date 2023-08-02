import { createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import reset from "styled-reset";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Resume from "./pages/Reseme";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

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
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="/reseme" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Route>
      </Routes>
      <Footer />

      {/* <Route path="/" element={<Footer />} /> */}
      {/* <Header /> */}
    </>
  );
}

export default App;
