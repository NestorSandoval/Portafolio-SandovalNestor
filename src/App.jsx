import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Start />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
