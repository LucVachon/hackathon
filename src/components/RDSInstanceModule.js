import React from 'react';
import TextVariable from './TextVariable';

function RDSInstanceModule(props){
  const fields = [
    {label: 'Module Name', variable: 'moduleName'},
    {label: 'Domain', variable: 'domain'},
    {label: 'Subdomain', variable: 'sub_domain'},
    {label: 'Stage', variable: 'stage'},
    {label: 'DB Port', variable: 'db_port'},
    {label: 'DB Username', variable: 'db_username'},
    {label: 'DB Password', variable: 'db_password'},
    {label: 'DB Allocated Storage', variable: 'db_allocated_stroage'},
    {label: 'DB Name', variable: 'db_name'},
    {label: 'DB Engine', variable: 'db_engine'},
    {label: 'DB Engine Version', variable: 'db_engine_version'},
    {label: 'DB Class', variable: 'db_class'},
    {label: 'DB Ingress CIDR', variable: 'db_ingress_cidr'},
  ]
  return (
    <div className={'RDSInstanceModule'}>
      {fields.map(field=>{
        return (<TextVariable label={field.label} variable={field.variable} setModuleData={props.setModuleData} index={props.index} defaultValue={field.default?field.default:''}/>)
      })}
    </div>
  )
}

export default RDSInstanceModule;
