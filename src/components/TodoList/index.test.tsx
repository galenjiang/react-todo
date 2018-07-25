import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Component, { ITodoItem } from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(<Component todo={[]} type="all" >
        {
            (todo: ITodoItem[]) => {
              return [
                  <h5 key={'1'}>hello todo-list</h5>,
                  <h5 key={'2'}>hello todo-list</h5>,
              ]
            }
        }
    </Component>, div);
  ReactDOM.unmountComponentAtNode(div);
});
