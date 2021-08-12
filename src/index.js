import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TodoApp = {
	init : () => {
		ReactDOM.render(<TodoApp.Container/>,	document.getElementById('root'));
	},
	state : {
		items : [
			{text:'쎕쎄요~', checked: true}
			, {text:'뭐뭐머하기', checked: false}
			, {text:'뭐뭐머하기', checked: true}
		]
	},
	Container : () => {
		return (
			<main>
				<TodoApp.Title>TODO</TodoApp.Title>
				<TodoApp.Form/>
				<TodoApp.List/>
			</main>
		);
	},
	Title : (props) => {
		// let nowDate = new Date();
		return (
			<div className="title">
				<p>{props.children}</p>
			</div>
		)
	},
	Form : () => {
		return (
			<div className="form">
				<input type="text" id="todoInput" placeholder="Text"/>
				<button type="button" id="submitBtn" 
					onClick={(e) => TodoApp.AddTodos()}
				>
					Add!!
				</button>
			</div>
		)
	},
	List : () => {
		const [ itemData ] = useState(TodoApp.state.items);
		return (
			<section>
				<TodoApp.Item/>
			</section>
		)
	},
	Item : () => {
		const [ itemData ] = useState(TodoApp.state.items);
		return (
			<ul className="list">
				{itemData && itemData.map( (items, i) => {
					return <li 
								className={`item ${items.checked ? 'checked' : ''}`} 
								key={i}
						   >
						  	{(i+1)+ ". " +items.text}
						   </li>
				})}
			</ul>
		)
	},
	AddTodos : () => {
		const [ todos, setTodos ] = useState(TodoApp.state.items);
		const value = document.querySelector('#todoInput').value;
		console.log(value, todos);
		// setTodos([...todos, {value, checked : false}]);

	}
}

window.onload = (e) => TodoApp.init();
