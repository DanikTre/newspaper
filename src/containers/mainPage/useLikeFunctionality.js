import { useState } from "react";

export const useLikeFunctionality = (array) => {
  const defaultLikeState = array.map((i) => ({
    id: i.id,
    state: i.likeState,
    count: i.likeCount,
  }));

  const [likeState, setLikeState] = useState(defaultLikeState);

  const handleLike = (id) => {
    setLikeState((currentState) => {
      const index = currentState.findIndex((el) => el.id === id);
      // делает глубокую копию
      const copy = JSON.parse(JSON.stringify(currentState));
      const { state } = copy[index];
      const newState = !state;
      copy[index].state = newState;

      if (!state) {
        copy[index].count++;
      } else {
        copy[index].count--;
      }

      return copy;
    });
  };
  return [likeState, handleLike];
};
