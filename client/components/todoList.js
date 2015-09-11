var React = require('react'),
	_ = require('lodash'),
	todoItem = require('./todo.js');

module.exports = React.createClass('todoList', function(){
	getInitialState: function(){

	},
	componentDidMount: function(){

	},
	renderItem: function(){
		return  _.map(this.props.todoData, function(data){
					return <todoItem data={data}></todoItem>
				});
	},
	render: function(){
		return {
			<div class="todo-list">
				{this.renderItem()}
			</div>
		}
	}
});
