import React from 'react';
import './App.css';
import ProjectInput from './components/ProjectInput';
import ModuleList from './components/ModuleList';

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
    document.getElementById('outdata').value=JSON.stringify({projectRole:this.state.projectRole, projectName:this.state.projectName, moduleData: this.state.moduleData});
  };
  removeModuleData = (index) => {
    const moduleData = this.state.moduleData;
    moduleData[index] = null;
    this.setState({moduleData});
    document.getElementById('outdata').value=JSON.stringify({projectRole:this.state.projectRole, projectName:this.state.projectName, moduleData: this.state.moduleData});

  }
  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <h1>Slartibartfast / Terraform Nursery / Terraform Initializer</h1>
          <ProjectInput setProjectRole={this.setProjectRole} setProjectName={this.setProjectName}/>
          <ModuleList setModules={this.setModules} modules={this.state.modules} moduleData={this.state.moduleData} removeModuleData={this.removeModuleData} setModuleData={this.setModuleData}/>
          <form method={'post'} action={'/generate'}>
            <textarea name='JSONOUT' placeholder='JSON OUTPUT GOES HERE' style={{width:'64em', height:'10em'}} id={'outdata'}></textarea>
            <input type={'submit'} value={'Submit'}/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
