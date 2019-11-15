import React from 'react';
import './App.css';
import ProjectInput from './components/ProjectInput';
import ModuleList from './components/ModuleList';
import { Button } from '@material-ui/core';
class App extends React.Component {
  state = {
    modules: [],
    moduleData: [],
    projectRole: '',
    projectName: '',
  };
  setProjectRole = (projectRole) => {this.setState({projectRole})};
  setProjectName = (projectName) => {this.setState({projectName})};
  setModules = (modules) => {
    this.setState({modules});
  };
  setModuleData = (index, variable, value) => {
    console.log(`${index} ${variable}=${value}`);
    const moduleData = this.state.moduleData;
    if(!moduleData[index]){
      moduleData[index]={};
    }
    moduleData[index][variable]=value;
    this.setState({moduleData});
  };
  removeModuleData = (index) => {
    const moduleData = this.state.moduleData;
    moduleData[index] = null;
    this.setState({moduleData});

  }
  submitForm = async () => {
    //Not going to lie, 95% of this is stackoverflow answers for how to download from an AJAX response
    const response = await fetch('//localhost:8080/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF8'
      },
      body: JSON.stringify({projectRole:this.state.projectRole, projectName:this.state.projectName, moduleData: this.state.moduleData}) // body data type must match "Content-Type" header
    });
    response.blob().then(function(blob) {
      const filename='terraform.zip';
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
        window.navigator.msSaveBlob(blob, filename);
      } else {
        let URL = window.URL || window.webkitURL;
        let downloadUrl = URL.createObjectURL(blob);

        if (filename) {
          // use HTML5 a[download] attribute to specify filename
          let a = document.createElement("a");
          // safari doesn't support this yet
          if (typeof a.download === 'undefined') {
            window.location = downloadUrl;
          } else {
            a.href = downloadUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
          }
        } else {
          window.location = downloadUrl;
        }

        setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
      }
    });
  }


  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <div className={"AppTitle"}>Terraform Initializer</div>
          <ProjectInput setProjectRole={this.setProjectRole} setProjectName={this.setProjectName}/>
          <ModuleList setModules={this.setModules} modules={this.state.modules} removeModuleData={this.removeModuleData} setModuleData={this.setModuleData}/>
            {this.state.showJSON && (
              <div>
                <textarea name='JSONOUT'
                          placeholder='JSON OUTPUT GOES HERE'
                          style={{width:'64em', height:'10em'}}
                          id={'outdata'}
                          value={JSON.stringify(
                            {
                              projectRole:this.state.projectRole,
                              projectName:this.state.projectName,
                              moduleData: this.state.moduleData},
                            undefined,
                            2
                          )
                          }></textarea>
              </div>
              )
            }
          <Button variant='contained' className={'GreenButton'} disabled={this.state.moduleData.length===0} onClick={()=>{this.setState({showJSON:!this.state.showJSON})}}>Toggle Request Preview</Button>
          <Button variant='contained' className={'GreenButton'} disabled={this.state.moduleData.length===0} onClick={this.submitForm}>Generate ZIP</Button>
        </div>
      </div>
    );
  }
}

export default App;
