import { MotionProps } from "framer-motion";

export const slideInFromLeft: MotionProps = {
  variants: {
    hidden: { opacity: 0, translateX: -40 },
    visible: { opacity: 1, translateX: 0 },
  },
  initial: "hidden",
  whileInView: "visible",
  exit: "hidden",
  viewport: {
    amount: 0.5,
  },
  transition: { type: "spring", duration: 1, bounce: 0 },
};

export const slideInFromRight: MotionProps = {
  variants: {
    hidden: { opacity: 0, translateX: 40 },
    visible: { opacity: 1, translateX: 0 },
  },
  initial: "hidden",
  whileInView: "visible",
  exit: "hidden",
  viewport: {
    amount: 0.5,
  },
  transition: { type: "spring", duration: 1, bounce: 0 },
};

export const slideInFromTop: MotionProps = {
  variants: {
    hidden: { opacity: 0, translateY: 40 },
    visible: { opacity: 1, translateY: 0 },
  },
  initial: "hidden",
  whileInView: "visible",
  exit: "hidden",
  viewport: {
    amount: 0.5,
  },
  transition: { type: "spring", duration: 1, bounce: 0 },
};
