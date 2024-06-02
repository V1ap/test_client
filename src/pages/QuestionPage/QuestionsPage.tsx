import OneAnswer from "@/components/questions/OneAnswer/OneAnswer";
import Actions from "@/components/Actions/Actions";
import { useQurstionsStore } from "@/store/questionsStore";
import MultiAnswer from "@/components/questions/MultiAnswer/MultiAnswer";
import ShortAnswer from "@/components/questions/ShortAnswer/ShortAnswer";
import ExpandedAnswer from "@/components/questions/ExpandedAnswer/ExpandedAnswer";
import Timer from "@/components/Timer/Timer";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { useBeforeUnload } from "react-router-dom";
import { useTimerStore } from "@/store/timerStore";
import { useAnswersStore } from "@/store/answersStore";
import { useEffect } from "react";

const QuestionsPage: React.FC = () => {
  const { answers, currentAnswer } = useAnswersStore();
  const timer = useTimerStore((state) => state.timer);
  const { currentQuestion, questions } = useQurstionsStore();

  useEffect(() => {
    localStorage.removeItem("answers");
  }, []);

  useBeforeUnload(() => {
    localStorage.setItem(
      "savedData",
      JSON.stringify({ answers, currentAnswer, timer, currentQuestion })
    );
  });
  return (
    <>
      <Timer />
      <ProgressBar
        step={questions.findIndex((q) => q.id === currentQuestion.id)}
        maxStep={questions.length - 1}
      />
      {currentQuestion.type === "ONE_ANSWER" && (
        <OneAnswer
          question={currentQuestion.question}
          answers={currentQuestion.answers || []}
        />
      )}

      {currentQuestion.type === "MULTI_ANSWER" && (
        <MultiAnswer
          question={currentQuestion.question}
          answers={currentQuestion.answers || []}
        />
      )}

      {currentQuestion.type === "SHORT_ANSWER" && (
        <ShortAnswer question={currentQuestion.question} />
      )}

      {currentQuestion.type === "EXPANDED_ANSWER" && (
        <ExpandedAnswer question={currentQuestion.question} />
      )}
      <Actions
        maxStep={questions.length - 1}
        step={questions.findIndex((q) => q.id === currentQuestion.id)}
      />
    </>
  );
};

export default QuestionsPage;
