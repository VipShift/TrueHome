// App.jsx
import { Routes, Route } from "react-router";
import { Services, Contact, Main } from "./pages";
import { Futer, Header } from "./components";
import styled from "styled-components";
import { LanguageProvider } from "./components/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <AppContainer>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Futer />
      </AppContainer>
    </LanguageProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  .content {
    flex: 1;
    width: 100%;
  }
`;
