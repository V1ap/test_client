import { startTimer } from "@/consts/timer";
import { create } from "zustand";

type TTimerState = {
  timer: number;
};

type TTimerAction = {
  setTimer: (time: number) => void;
};

const savedData = JSON.parse(localStorage.getItem("savedData") || "{}");

export const useTimerStore = create<TTimerState & TTimerAction>((set) => ({
  timer: savedData?.timer || startTimer,
  setTimer: (time: number) =>
    set((state: TTimerState) => ({ ...state, timer: time })),
}));
