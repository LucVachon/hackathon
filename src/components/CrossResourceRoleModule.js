import React from 'react';
import TextVariable from './TextVariable';

function CrossResourceRoleModule(props){
  const fields = [
    {label: 'Module Name', variable: 'moduleName'},
    {label: 'Domain', variable: 'domain'},
    {label: 'Subdomain', variable: 'subDomain'},
    {label: 'User ID', variable: 'userId'},
  ]
  return (
    <div className={'CrossResourceRoleModule'}>
      {fields.map(field=>{
        return (<TextVariable label={field.label} variable={field.variable} setModuleData={props.setModuleData} index={props.index}/>)
      })}
    </div>
  )
}

export default CrossResourceRoleModule;
