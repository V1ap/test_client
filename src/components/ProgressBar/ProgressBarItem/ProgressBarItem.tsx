import styles from "@/components/ProgressBar/ProgressBarItem/progressBarItem.module.scss";

interface IProgressBarItemProps {
  type: "done" | "current" | "not-done";
}

const ProgressBarItem: React.FC<IProgressBarItemProps> = ({ type }) => {
  return <div className={`${styles.progressBarItem} ${styles[type]}`} />;
};

export default ProgressBarItem;
