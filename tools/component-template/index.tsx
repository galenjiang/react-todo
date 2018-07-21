import * as React from 'react';
import './style.css'

interface IProps {
  name: string
}
interface IStates {}

class App extends React.Component<IProps, IStates> {
  public render() {
    return <div className="component">hello {this.props.name}</div>;
  }
}

export default App;
