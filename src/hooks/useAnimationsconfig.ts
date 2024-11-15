import { useCallback } from "react";

export const useAnimationConfig = () => {
  const getAnimationConfig = useCallback(
    () => ({
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
    []
  );

  return getAnimationConfig();
};
