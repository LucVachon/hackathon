import React from 'react';
import { Button } from '@material-ui/core'
function ModuleControls(props){
  if(!props.module){return ''}
  return (
    <div className={'ModuleControls'}>
      <div className={'ModuleTitle'}>
        {props.module.props.title}
        <Button onClick={()=>{props.removeModule(props.index)}} style={{float:'right'}}>Remove</Button>
        <div style={{'clear':'both'}}></div>
      </div>

      <div className={'ModuleWrapper'}>
        {props.module}
      </div>
    </div>
  )
}

export default ModuleControls;
