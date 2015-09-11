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
	componentWillMount: function(){

	},
	delete: function(){
		this.
	},
	render: function(){
		return {
			<div class="todo-item" ref="todoItem">
				{input}
				{this.props.content}
				<div class="todo-date">{this.props.date}</div>
				<a class="link-close" href="javascript:;" onClick="{this.delete}">删除</a>
			</div>
		}
	}
});