import React, { useState } from 'react';
import CrossResourceRoleModule from './CrossResourceRoleModule';
import RDSInstanceModule from './RDSInstanceModule';
import RDSClusterModule from './RDSClusterModule';

import { Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import ModuleControls from './ModuleControls';

function ModuleList(props){
  const [newModule, setNewModule] = useState(null);
  const addModule = () => {
    const modules = props.modules || [];
    console.log(newModule);
    if(newModule==='CRRM'){
      props.setModuleData(modules.length,'moduleType','CRRM');
      modules.push(<CrossResourceRoleModule index={modules.length} setModuleData={props.setModuleData} title={'Cross Resource Role Module'}/>);
      props.setModules(modules);
    }
    if(newModule==='RDSI'){
      props.setModuleData(modules.length,'moduleType','RDSI');
      modules.push(<RDSInstanceModule index={modules.length} setModuleData={props.setModuleData} title={'RDS Instance Module'}/>);
      props.setModules(modules);
    }
    if(newModule==='RDSC'){
      props.setModuleData(modules.length,'moduleType','RDSC');
      modules.push(<RDSClusterModule index={modules.length} setModuleData={props.setModuleData} title={'RDS Cluster Module'}/>);
      props.setModules(modules);
    }
    console.log(modules);
  }
  const chooseModule = (event) => {
    setNewModule(event.target.value);
  }
  const removeModule = (index) => {
    const modules = props.modules || [];
    modules[index]=null;
    props.setModules(modules);
    props.removeModuleData(index);
  }

  const cloneModule = (index) => {
    const modules = props.modules || [];
    const newModule = modules.slice(index,index+1)[0];
    modules.push(newModule);
    props.setModules(modules);
  }
  return (
    <div className={'ModuleList'}>
      <div className={'ModuleListContainer'}>
        {props.modules && props.modules.map((module,index)=>{
          return <ModuleControls
                    key={`module${index}`}
                    index={index}
                    module={module}
                    removeModule={removeModule}
                    cloneModule={cloneModule}
                    setModuleData={props.setModuleData}
          />;
        })}
      </div>
      <FormControl style={{width:'30em'}}>
        <InputLabel id={'ModuleSelectLabel'}>Choose Module</InputLabel>
        <Select labelId={'ModuleSelectLabel'} onChange={chooseModule}>
          <MenuItem value={'CRRM'}>Cross Resource Role Module</MenuItem>
          <MenuItem value={'RDSI'}>RDS Instance</MenuItem>
          <MenuItem value={'RDSC'}>RDS Cluster</MenuItem>
        </Select>
      </FormControl>
      <Button variant={'contained'} onClick={addModule} className={'GreenButton'} disabled={!newModule}>Add Module</Button>

    </div>
  )
}

export default ModuleList;

