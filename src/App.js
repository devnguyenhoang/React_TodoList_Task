import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import TaskControl from './Components/TaskControl';
import TaskList from './Components/TaskList';
var randomstring = require("randomstring");

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tasks: []
      }
   }
   componentWillMount() {
      if (localStorage && localStorage.getItem('tasks')) {
         let tasks = JSON.parse(localStorage.getItem('tasks'));
         this.setState({
            tasks: tasks,
            isDisplayForm: false
         });
      }
   }
   onAddLocoltorage = () => {
      let tasks = [
         {
            id: randomstring.generate(9),
            name: 'da bong',
            status: true
         },
         {
            id: randomstring.generate(9),
            name: 'bong chuyen',
            status: false
         },
         {
            id: randomstring.generate(9),
            name: 'tenis',
            status: true
         }
      ];
      this.setState({
         tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   onToggleForm = () => {
      this.setState({
         isDisplayForm : !this.state.isDisplayForm
      })
   }
   render() {
      let { tasks, isDisplayForm } = this.state;
      let elmTaskForm = isDisplayForm ? <TaskForm /> : ''
      return (
         <div className="container">
            <div className="text-center">
               <h1>Quản Lý Công Việc</h1>
               <hr />
            </div>
            <div className="row">
               {/* TaskForm */}
               <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-84"
                  : ""}>
                  {elmTaskForm}
               </div>
               <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                  <button type="button"
                     className="btn btn-primary"
                     onClick={this.onToggleForm}
                  >
                     <i className="fa fa-plus" aria-hidden="true"></i>   Thêm Công Việc
                  </button>
                  <button type="button"
                     className="btn btn-success"
                     onClick={this.onAddLocoltorage}
                  >
                     <i className="fa fa-plus" aria-hidden="true"></i>   AddLocoltorage
                  </button>
                  <TaskControl />
                  <div className="row mt-15">
                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList tasks={tasks} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   };
}

export default App;
