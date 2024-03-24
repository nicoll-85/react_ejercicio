import React, { useState } from 'react';

const ButtonLikes = () => {
  const [likes, setLikes] = useState(50);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={handleLike} disabled={liked}>
        {liked ? 'Ya te gusta' : 'Me gusta'}
      </button>
    </div>
  );
};

export default ButtonLikes;
