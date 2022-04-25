import { useState } from "react";

export const useSaveFunctionality = (array) => {
  const defaultFollowState = array.map((i) => ({
    id: i.value,
    state: i.saveState,
  }));

  const [saveState, setSaveState] = useState(defaultFollowState);

  const handleLike = (id) => {
    setSaveState((currentState) => {
      const index = currentState.findIndex((el) => el.id === id);
      // делает глубокую копию
      const copy = JSON.parse(JSON.stringify(currentState));
      const { state } = copy[index];
      const newState = !state;
      copy[index].state = newState;

      return copy;
    });
  };
  return [saveState, handleLike];
};
