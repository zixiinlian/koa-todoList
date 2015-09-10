var React = require('react'),
	todoItem = require('./todo.js');

module.exports = React.createClass('todoList', function(){
	getInitialState: function(){
		return {
			todoData: {}
		}	
	},
	getData: function(){
		$.get(function(result){
			this.setState({
				todoData: result
			});
		});
	},
	componentDidMount: function(){
		this.getData();
	},
	renderItem: function(){
		var itemHtml = 
	},
	render: function(){
		return {
			<div class="todo-list">
				{
					forEach(function(){
						<todoItem data="data"></todoItem>
					})
				}
			</div>
		}
	}
});
