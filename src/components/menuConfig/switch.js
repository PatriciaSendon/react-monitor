import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels({ controlAnimation, name, stateSwitch }) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={stateSwitch}
            onChange={controlAnimation}
            value="checkedA"
          />
        }
        label={<label>{name}</label>}
      />
    </FormGroup>
  );
}
