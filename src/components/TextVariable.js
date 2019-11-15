import React from 'react';
import { TextField } from '@material-ui/core';

function CrossResourceRoleModule(props) {
  return (
    <TextField defaultValue={props.defaultValue} className="ModuleVariable" label={props.label} onChange={(event) => {
      props.setModuleData(props.index, props.variable, event.target.value)
    }}/>
  )
}

export default CrossResourceRoleModule;
