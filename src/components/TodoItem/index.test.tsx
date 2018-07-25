import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Component from './';

it('renders without crashing', () => {
  const invoker = (args: any) => {
  //
  }
  const div = document.createElement('div');
  ReactDOM.render(<Component label='' checked={true} onChangeChecked={invoker} onChangeValue={invoker} onRemove={invoker} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
