import { Routes, Route } from "react-router-dom";
import QnAPage from "./pages/QnAPage";
import CheerPage from "./pages/CheerPage";
import QnACompletePage from "./pages/QnACompletePage copy";
import FailuresPage from "./pages/FailuresPage";
import FailureDetailPage from "./pages/FailureDetailPage";
import PromoPage from "./pages/PromoPage";
import MyFailsPage from "./pages/MyFailsPage";
import MyFailDetailPage from "./pages/MyFailDetailPage";
import StartPage from "./pages/StartPage";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
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
      <Route path="/start" element={<StartPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<CategoryPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/kakao" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
