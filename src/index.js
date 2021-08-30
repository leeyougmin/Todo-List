import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const TodoApp = () => {
	
	const state = {
		items : [
			{text:'쎕쎄요~', checked: true}
			, {text:'뭐뭐머하기', checked: false}
			, {text:'뭐뭐머하기', checked: true}
		]
	}

	const [ item, setItem ] = useState([]);
	const [ inputValue, setInputValue ] = useState({});

	const List = () => {
		return (
			<section>
				<Item/>
			</section>
		)
	}

	const Item = () => {
		return (
			<ul className="list">
				{item && item.map( (v, i) => {
					return (
						<li 
							className={`item ${v.checked ? 'checked' : ''}`} 
							key={i}
						>
							{(i+1)+ ". " +v.text}
						</li>
					);
				})}
			</ul>
		)
	}
	const AddTodos = () => {
		setItem([...item, inputValue]);
	}

	return (
		<main>
			<div className="title">
				<p>TODO</p>
			</div>
			<div className="form">
				<input type="text" id="todoInput" placeholder="Text" onChange={(e) => {setInputValue({text : e.target.value, checked : false})}}/>
				<button type="button" id="submitBtn" onClick={() => AddTodos()}>Add!!</button>
			</div>
			<List/>
		</main>
	);
}

ReactDOM.render(<TodoApp/>,	document.getElementById('root'));

export default TodoApp;

