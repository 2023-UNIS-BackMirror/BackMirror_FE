import { Routes, Route } from "react-router-dom";
import QnAPage from "./pages/QnAPage";
import CheerPage from "./pages/CheerPage";
import QnACompletePage from "./pages/QnACompletePage copy";
import FailuresPage from "./pages/FailuresPage";
import FailureDetailPage from "./pages/FailureDetailPage";
function App() {
  return (
    <Routes>
      <Route path="/qna" element={<QnAPage />} />
      <Route path="/cheer" element={<CheerPage />} />
      <Route path="/complete" element={<QnACompletePage />} />
      <Route path="/failures" element={<FailuresPage />} />
      <Route path="/failures/:id" element={<FailureDetailPage />} />
    </Routes>
  );
}

export default App;
