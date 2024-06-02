export enum EQuestionType {
  ONE_ANSWER = "ONE_ANSWER",
  MULTI_ANSWER = "MULTI_ANSWER",
  SHORT_ANSWER = "SHORT_ANSWER",
  EXPANDED_ANSWER = "EXPANDED_ANSWER",
}

export type TQuestion = {
  question: string;
  answers?: string[];
  id: number;
  type: EQuestionType;
};
