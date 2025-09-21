import Portifolio from "./pages/Portifolio";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TelaAviso from "./pages/TelaAviso";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portifolio />} />
        <Route path="/TelaAviso" element={<TelaAviso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
