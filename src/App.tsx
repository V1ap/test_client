import "@/styles/App.scss";
import { Navigate, Route, Routes } from "react-router";
import QuestionsPage from "@/pages/QuestionPage/QuestionsPage";
import FinalPage from "@/pages/FinalPage/FinalPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<QuestionsPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
