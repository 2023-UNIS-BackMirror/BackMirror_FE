import { Routes, Route } from "react-router-dom";
import QnAPage from "./pages/QnAPage";
import QnACompletePage from "./pages/QnACompletePage";

function App() {
  return (
    <Routes>
      <Route path="/QnA" element={<QnAPage />} />
      <Route path="/QnAComplete" element={<QnACompletePage />} />
    </Routes>
  );
}

export default App;
