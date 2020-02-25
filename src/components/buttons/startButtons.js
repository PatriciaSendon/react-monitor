import React from 'react';
import IconButton from '@material-ui/core/IconButton';



const PlayButton = ({ startFetch,startButtonState }) => {

   console.log(startButtonState)
    return (

        <IconButton style={{color: startButtonState.color}} disabled={startButtonState.disabled}  className={"fas fa-play-circle"} onClick={startFetch}  />

        
        )
}



export default PlayButton;