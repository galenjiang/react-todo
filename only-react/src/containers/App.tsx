import * as React from 'react';
import './App.css';
import { Header } from '@Components/Header';

Header

class App extends React.Component {
  public render() {
    return (
      <>
        <section className="todoapp">
			<Header />
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					<li className="completed">
						<div className="view">
							<input className="toggle" type="checkbox" checked={true} />
							<label>Taste JavaScript</label>
							<button className="destroy" />
						</div>
						<input className="edit" value="Create a TodoMVC template" />
					</li>
					<li>
						<div className="view">
							<input className="toggle" type="checkbox" />
							<label>Buy a unicorn</label>
							<button className="destroy" />
						</div>
						<input className="edit" value="Rule the web" />
					</li>
				</ul>
			</section>
			<footer className="footer">
				<span className="todo-count"><strong>0</strong> item left</span>
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
		</section>
		<footer className="info">
			<p>Double-click to edit a todo</p>
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			<p>Created by <a href="http://todomvc.com">galen</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
      </>
    );
  }
}

export default App;