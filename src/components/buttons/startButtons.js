import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const PlayButton = ({ startFetch, startButtonState }) => {
  return (
    <IconButton
      style={{ color: startButtonState.color }}
      disabled={startButtonState.disable}
      className={'fas fa-play-circle'}
      onClick={startFetch}
    />
  );
};

export default PlayButton;
