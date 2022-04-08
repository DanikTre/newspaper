import { useState } from "react";

const LikeButtonState = () => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    if (!liked) {
      setLiked((value) => !value);
      setCounter(count + 1);
    } else {
      setLiked((value) => !value);
      setCounter(count - 1);
    }
  };

  const [count, setCounter] = useState(345);
};
export default LikeButtonState;
