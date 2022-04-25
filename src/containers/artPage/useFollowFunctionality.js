import { useState } from "react";

export const useFollowFunctionality = (array) => {
  const defaultFollowState = array.map((i) => ({
    id: i.value,
    state: i.followState,
  }));

  const [likeState, setLikeState] = useState(defaultFollowState);

  const handleLike = (id) => {
    setLikeState((currentState) => {
      const index = currentState.findIndex((el) => el.id === id);
      // делает глубокую копию
      const copy = JSON.parse(JSON.stringify(currentState));
      const { state } = copy[index];
      const newState = !state;
      copy[index].state = newState;

      return copy;
    });
  };
  return [likeState, handleLike];
};
