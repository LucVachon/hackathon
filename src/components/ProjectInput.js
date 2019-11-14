import React from 'react';
import {TextField} from "@material-ui/core";
import '../App.css';

function ProjectInput(props){
  return (
    <div className={'ProjectInput'}>
      <TextField className={'ProjectInputTextField'} labelId={'ProjectRole'} label={'Project Role'} onChange={(event)=>{props.setProjectRole(event.currentTarget.value)}}/>
      <TextField className={'ProjectInputTextField'} labelId={'ProjectName'} label={'Project Name'} onChange={(event)=>{props.setProjectName(event.currentTarget.value)}}/>
    </div>
  )
}

export default ProjectInput;
