import { baseQuestions } from "@/consts/baseQuestions";
import { TQuestion } from "@/types/TQuestion";
import { create } from "zustand";

type TQuestionsState = {
  questions: TQuestion[];
  currentQuestion: TQuestion;
};

type TQuestionAction = {
  nextQuestion: () => void;
  setCurrentQuestion: (question: TQuestion) => void;
};

const savedData = JSON.parse(localStorage.getItem("savedData") || "{}");

export const useQurstionsStore = create<TQuestionsState & TQuestionAction>(
  (set) => ({
    questions: baseQuestions,
    currentQuestion: savedData?.currentQuestion || baseQuestions[0],
    nextQuestion: () =>
      set((state: TQuestionsState) => ({
        ...state,
        currentQuestion:
          state.questions[
            state.questions.findIndex(
              // Защита от дублирующихся вопросов
              (q) => q.id === state.currentQuestion.id
            ) + 1
          ],
      })),
    setCurrentQuestion: (question: TQuestion) =>
      set((state: TQuestionsState) => ({
        ...state,
        currentQuestion: question,
      })),
  })
);
