import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import Badge from '@mui/material/Badge';

export default function Counter() {
    let [like,setLike] = useState(0);
    let [dislike, setDisLike] = useState(0);

    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setDisLike(dislike + 1);

  return (
    <div>
        <IconButton aria-label='Like' onClick={incrementLike}>
            <Badge badgeContent={like} color="error">👍</Badge>
        </IconButton>
        <IconButton aria-label='Dislike' onClick={incrementDisLike}>
            <Badge badgeContent={dislike} color="error">👎</Badge>
        </IconButton>
    </div>
  );
}
