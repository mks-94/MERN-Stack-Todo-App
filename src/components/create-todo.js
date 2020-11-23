import React from "react";

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoResposible = this.onChangeTodoResposible.bind(this);
    this.onSubmitHandler = this.onSubmitHandler(this);

    this.state = {
      todo_description: "",
      todo_resposnsible: "",
      todo_priority: "",
      todo_completed: false,
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value,
    });
  }

  onChangeTodoResposible(e) {
    this.setState({
      todo_resposnsible: e.target.value,
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value,
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    console.log(`Form Submitted`);
    console.log(`Todo Descritption: ${this.state.todo_description}`);
    console.log(`Todo Resposible: ${this.state.todo_resposnsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    console.log(`Todo Completed: ${this.state.todo_completed}`);

    this.setState({
      todo_description: "",
      todo_resposnsible: "",
      todo_priority: "",
      todo_completed: false,
    });
  }

  render() {
    return (
      <div>
        <h2>Welocome to Create Todo Component!</h2>
      </div>
    );
  }
}
export default CreateTodo;
