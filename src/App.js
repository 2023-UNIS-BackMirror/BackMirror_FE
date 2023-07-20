import { Routes, Route } from "react-router-dom";
import QnAPage from "./pages/QnAPage";

function App() {
  return (
    <Routes>
      <Route path="/QnA" element={<QnAPage />} />
    </Routes>
  );
}

export default App;
