import { Routes, Route } from "react-router-dom";
import QnAPage from "./pages/QnAPage";
import CheerPage from "./pages/CheerPage";
import QnACompletePage from "./pages/QnACompletePage copy";
import FailuresPage from "./pages/FailuresPage";
import FailureDetailPage from "./pages/FailureDetailPage";
import PromoPage from "./pages/PromoPage";
import MyFailsPage from "./pages/MyFailsPage";
import MyFailDetailPage from "./pages/MyFailDetailPage";
function App() {
  return (
    <Routes>
      <Route path="/qna/:type" element={<QnAPage />} />
      <Route path="/cheer" element={<CheerPage />} />
      <Route path="/complete" element={<QnACompletePage />} />
      <Route path="/failures" element={<FailuresPage />} />
      <Route path="/failures/:id" element={<FailureDetailPage />} />
      <Route path="/promotion" element={<PromoPage />} />
      <Route path="/myfails" element={<MyFailsPage />} />
      <Route path="/myfails/:postId" element={<MyFailDetailPage />} />
    </Routes>
  );
}

export default App;
