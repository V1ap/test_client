import { EQuestionType, TQuestion } from "@/types/TQuestion";

export const baseQuestions: TQuestion[] = [
  {
    question: "Как дела ?",
    answers: ["Хорошо", "Нормально", "Не очень"],
    id: 1,
    type: EQuestionType.ONE_ANSWER,
  },
  {
    question: "Выбирите знания которые необходимы front-end разработчику",
    answers: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Zustand",
      "Рецепт омлета из страусиного яйца",
    ],
    id: 2,
    type: EQuestionType.MULTI_ANSWER,
  },
  {
    question: "Какая у вас профессия ?",
    id: 3,
    type: EQuestionType.SHORT_ANSWER,
  },
  {
    question: "Расскажите о себе",
    id: 4,
    type: EQuestionType.EXPANDED_ANSWER,
  },
];
