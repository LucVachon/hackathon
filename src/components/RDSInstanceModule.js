import React, {useState} from 'react';
import TextVariable from './TextVariable';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

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
    {label: 'DB Ingress CIDR', variable: 'db_ingress_cidr'},
  ]
  const db_class = [
//burstable class
    "db.t2.micro", "db.t2.small", "db.t2.medium", "db.t2.large", "db.t2.xlarge", "db.t3.micro", "db.t3.small", "db.t3.medium", "db.t3.large",  "db.t3.xlarge", "db.t3.2xlarge",
//standard classes
    "db.m3.large", "db.m3.xlarge",  "db.m3.2xlarge",  "db.m3.4xlarge", "db.m3.8xlarge",  "db.r4.large",  "db.r4.xlarge",  "db.r4.2xlarge",  "db.r4.4xlarge", "db.r4.8xlarge", "db.r4.16xlarge",  "db.r5.large", "db.r5.xlarge", "db.r5.2xlarge", "db.r5.4xlarge", "db.r5.12xlarge", "db.r5.24xlarge",
//memory optimized
    "db.r3.large", "db.r3.xlarge", "db.r3.2xlarge", "db.r3.4xlarge", "db.r3.8xlarge", "db.r4.large", "db.r4.xlarge", "db.r4.2xlarge", "db.r4.4xlarge", "db.r4.8xlarge", "db.r4.16xlarge", "db.r5.large",  "db.r5.xlarge",  "db.r5.2xlarge",  "db.r5.4xlarge",  "db.r5.12xlarge", "db.r5.24xlarge"];

  const mysql_versions = ["5.5.46", "5.5.53", "5.5.54", "5.5.57",  "5.5.59", "5.5.61", "5.6.34", "5.6.35", "5.6.37", "5.6.39", "5.6.44", "5.7.16", "5.7.17", "5.7.21", "5.7.22", "5.7.23",  "5.7.24", "5.7.25", "5.7.26", "8.0.11", "8.0.13", "8.0.15",  "8.0.16"];
  const postgres_versions = ["9.3.12", "9.3.14", "9.3.16", "9.3.17", "9.3.19", "9.3.20",  "9.3.22", "9.3.23",  "9.3.24", "9.3.25", "9.4.7", "9.4.9", "9.4.11", "9.4.12", "9.4.14", "9.4.15", "9.4.17", "9.4.18", "9.4.19", "9.4.20", "9.4.21", "9.4.23", "9.4.24" ];
  const db_engines = ["mysql","postgres"];
  const [engine, setEngine] = useState(null);
  return (
    <div className={'RDSInstanceModule'}>
      {fields.map(field=>{
        return (<TextVariable label={field.label} variable={field.variable} setModuleData={props.setModuleData} index={props.index} defaultValue={field.default?field.default:''}/>)
      })}
      <FormControl className="ModuleVariable">
        <InputLabel id={'DBClass'}>DB Class</InputLabel>
        <Select labelId={'DBClass'} onChange={(event)=>{props.setModuleData(props.index, 'db_class', event.target.value)}}>
          {db_class.map(size=>
            <MenuItem value={size}>{size}</MenuItem>
          )}
        </Select>
      </FormControl>
      <FormControl className="ModuleVariable">
        <InputLabel id={'DBEngine'}>DB Engine</InputLabel>
        <Select labelId={'DBEngine'} onChange={(event)=>{setEngine(event.target.value);props.setModuleData(props.index, 'db_engine', event.target.value)}}>
          {db_engines.map(db=>
            <MenuItem value={db}>{db}</MenuItem>
          )}
        </Select>
      </FormControl>
      <FormControl className="ModuleVariable">
        <InputLabel id={'DBEngineVersion'}>DB Engine Version</InputLabel>
        <Select labelId={'DBEngineVersion'} onChange={(event)=>{props.setModuleData(props.index, 'db_engine_version', event.target.value)}}>
          {engine==='mysql'&&mysql_versions.map(version=>
            <MenuItem value={version}>{version}</MenuItem>
          )}
          {engine==='postgres'&&postgres_versions.map(version=>
            <MenuItem value={version}>{version}</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  )
}

export default RDSInstanceModule;
