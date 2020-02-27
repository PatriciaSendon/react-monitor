import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels({controlAnimation, name}) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    controlAnimation()
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label={<label>{name}</label>}
      />
     
     
    
    </FormGroup>
  );
}