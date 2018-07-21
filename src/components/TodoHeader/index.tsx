import * as React from 'react';
import './style.css'

interface IProps {
  name: string
}
// interface IStates {
// }

class TodoHeader extends React.Component<IProps, {}> {
  public render() {
    return  <header className="header">
    <h1>{this.props.name}</h1>
    <input className="new-todo" placeholder="What needs to be done?" /> 
  </header>
  }
}

export default TodoHeader;
