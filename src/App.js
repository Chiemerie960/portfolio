import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import styled from "styled-components";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Application className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/myresume" element={<Resume />} />
          <Route path="/contactme" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Application>
  );
}
const Application = styled.div`
  display: flex;
  overflow: hidden;
`;
export default App;
