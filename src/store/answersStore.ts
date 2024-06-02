import { create } from "zustand";

type TAnswersState = {
  answers: string[];
  currentAnswer: string;
};

type TAnswerAction = {
  addAnswer: () => void;
  setCurrentAnswer: (answer: string) => void;
  setAnswers: (answers: string[]) => void;
};

const savedData = JSON.parse(localStorage.getItem("savedData") || "{}");

export const useAnswersStore = create<TAnswersState & TAnswerAction>((set) => ({
  answers: savedData?.answers || [],
  currentAnswer: savedData?.currentAnswer || "",
  addAnswer: () =>
    set((state: TAnswersState) => ({
      ...state,
      answers: [...state.answers, state.currentAnswer],
      currentAnswer: "",
    })),

  setCurrentAnswer: (answer: string) =>
    set((state: TAnswersState) => ({ ...state, currentAnswer: answer })),

  setAnswers: (answers: string[]) =>
    set((state: TAnswersState) => ({ ...state, answers })),
}));
