import React, { useState } from 'react';
import TextVariable from './TextVariable';
import {Select, MenuItem, InputLabel, FormControl} from '@material-ui/core';

function RDSClusterModule(props){
  const fields = [
    {label: 'Module Name', variable: 'moduleName'},
    {label: 'Domain', variable: 'domain'},
    {label: 'Subdomain', variable: 'sub_domain'},
    {label: 'Stage', variable: 'stage'},
    {label: 'DB # of Instances', variable: 'db_number_instances'},
    {label: 'DB Port', variable: 'db_port'},
    {label: 'DB Username', variable: 'db_username'},
    {label: 'DB Password', variable: 'db_password'},
    {label: 'DB Allocated Storage', variable: 'db_allocated_storage'},
    {label: 'DB Name', variable: 'db_name'},
    {label: 'DB Ingress CIDR', variable: 'db_ingress_cidr'},
  ]

  const cluster_sizes = ["db.t3.medium", "db.r4.large", "db.r4.xlarge", "db.r4.2xlarge", "db.r4.4xlarge", "db.r4.8xlarge", "db.r4.16xlarge", "db.r5.large", "db.r5.xlarge", "db.r5.2xlarge", "db.r5.4xlarge", "db.r5.12xlarge", "db.r5.24xlarge"];
  const db_engines = ["aurora", "aurora-mysql", "aurora-postgresql"];
  const versions_aurora_postgres = [ "9.6.8", "9.6.9", "9.6.11", "9.6.12", "10.4", "10.5", "10.6", "10.7" ];
  const versions_aurora_mysql = [ "1.19.0", "1.19.1", "1.19.2", "1.19.5", "1.20.0", "1.21.0", "2.03.4", "2.04.0", "2.04.1", "2.04.2", "2.04.3", "2.04.4", "2.04.5" , "2.04.6", "2.04.7", "2.05.0", "2.06.0"];
  const [engine, setEngine] = useState(null);
  console.log(engine);
  return (
    <div className={'RDSCluserModule'}>
      {fields.map(field=>{
        return (<TextVariable label={field.label} variable={field.variable} setModuleData={props.setModuleData} index={props.index} defaultValue={field.default?field.default:''}/>)
      })}
      <FormControl className="ModuleVariable">
        <InputLabel id={'DBClass'}>DB Class</InputLabel>
        <Select labelId={'DBClass'} onChange={(event)=>{props.setModuleData(props.index, 'db_class', event.target.value)}}>
            {cluster_sizes.map(size=>
          <MenuItem value={size}>{size}</MenuItem>
        )}
        </Select>
      </FormControl>
      <FormControl className="ModuleVariable">
        <InputLabel id={'DBCEngine'}>DB Engine</InputLabel>
        <Select labelId={'DBCEngine'} onChange={(event)=>{setEngine(event.target.value);props.setModuleData(props.index, 'db_engine', event.target.value)}}>
          {db_engines.map(db=>
            <MenuItem value={db}>{db}</MenuItem>
          )}
        </Select>
      </FormControl>
      <FormControl className="ModuleVariable">
        <InputLabel id={'DBVersion'}>DB Version</InputLabel>
        <Select labelId={'DBVersion'} onChange={(event)=>{props.setModuleData(props.index, 'db_engine_version', event.target.value)}}>
          {engine==='aurora-mysql' && versions_aurora_mysql.map(version=>
            <MenuItem value={version}>{version}</MenuItem>
          )}
          {engine==='aurora-postgresql' && versions_aurora_postgres.map(version=>
            <MenuItem value={version}>{version}</MenuItem>
          )}
        </Select>
      </FormControl>

    </div>
  )
}

export default RDSClusterModule;
