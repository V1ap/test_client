import { useAnswersStore } from "@/store/answersStore";
import { useQurstionsStore } from "@/store/questionsStore";
import styles from "@/components/Actions/actions.module.scss";
import { useNavigate } from "react-router";

interface IActionsProps {
  step: number;
  maxStep: number;
}

const Actions: React.FC<IActionsProps> = ({ step, maxStep }) => {
  const { nextQuestion } = useQurstionsStore();
  const navigate = useNavigate();
  const { currentAnswer, addAnswer } = useAnswersStore();

  const handleNextStep = () => {
    addAnswer();
    if (step === maxStep) {
      navigate("/final", { replace: true });
      return;
    }
    nextQuestion();
  };

  return (
    <div className={styles.actions}>
      <button
        className={styles.actions__btn}
        onClick={handleNextStep}
        disabled={currentAnswer.length === 0}
      >
        {step === maxStep ? "Завершить" : "Ответить"}
      </button>
    </div>
  );
};

export default Actions;
