import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Start from "./pages/Start";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Start />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
