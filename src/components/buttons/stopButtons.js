import React from 'react';
import IconButton from '@material-ui/core/IconButton';



const StopButton = ({ stopFetch,stopButtonState }) => {

   
    return (

        <IconButton 
          style={
            {color: stopButtonState.color}}
            disabled={stopButtonState.disabled}
            className={"fas fa-pause-circle"}
            onClick={stopFetch}  />
 
        
        )
}




export default StopButton;