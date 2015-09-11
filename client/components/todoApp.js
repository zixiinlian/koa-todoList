var React = require('react'),
	todoItem = require('./todoList.js');

module.exports = React.createClass('todoApp', function(){
	getInitialState: function(){
		return {
			todoData: {},
			text: ''
		}	
	},
	getData: function(){
		$.get('/todo/list', function(result){
			this.setState({
				todoData: result
			});
		});
	},
	componentWillMount: function(){
		this.getData();
	},
	componentDidMount: function(){

	},
	onChange: function(e){
		this.setState({
			text: e.target.value
		});
	},
	addTodo: function(){
		var text = this.state.text;

		$.post('/todo/add', text, function(result){
			if(result){
				this.state.todoData.push(text);
				this.setState({todoData: this.state.todoData});
			}
		});
	},
	render: function(){
		return {
			<div class="todo-box">
				<div class="todo-add-box">
					<input type="input" placeholder="请输入新的目标" onChange="{this.onChange}"/>
					<a class="btn-add" href="javascript:;" onClick="{this.addTodo}">添加</a>
				</div>
				<todoList todoData={this.state.todoData}></todoList>
			</div>
		}
	}
});
