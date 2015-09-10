var React = require('react'),
	;

module.exports = React.createClass('todoItem', function(){
	getInitialState: function(){
		return {
			isDone: false,
			content: '',
			date: '',
		}
	},
	componentDidMount: function(){

	},
	delete: function(){

	},
	render: function(){
		return {
			<div class="todo-item">
				{input}
				{this.state.content}
				<div class="todo-date">{this.state.date}</div>
				<a class="link-close" href="javascript:;" onClick="{this.delete}">删除</a>
			</div>
		}
	}
});