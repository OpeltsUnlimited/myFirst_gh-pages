import React, { useEffect } from 'react';

function App() {  
  useEffect(() => {
    loadTodoList();
  }, []);
  return (
  <div className="App">
    <div  className="navbar bg-dark text-white p-2 ">
      <h1 className=""><i className="bi-card-checklist"></i> Checklist V0!</h1>
    </div>
    <div className="container list-group mt-3">
      <div className="list-group-item">
        <h3>New Task</h3>
        <div className="input-group">
          <input id="task" className="form-control" placeholder="task text" />
          <button className="input-group-append btn btn-primary bi-plus-lg" onClick={createTask}> Add </button>
        </div>
      </div>
      <div className="list-group-item">
        <h3>Exsisting Tasks</h3>
        <div id="taskList" className="list-group">
        </div>
      </div>
    </div>
  </div>
  
  )
  }

  
  /* only the visible element */
      function createTaskElement(taskDescription) {
        var list = document.getElementById("taskList")
  
        var newTask = document.createElement("div")
        newTask.className = "list-group-item"
        newTask.innerHTML = taskDescription
  
        var taskDeleteButton = document.createElement("div")
        taskDeleteButton.className = "btn btn-secondary float-end bi-x-circle"
        newTask.appendChild(taskDeleteButton)
  
        taskDeleteButton.onclick = function() {
          removeTodoData(taskDescription)
          newTask.remove()
        };
  
        list.appendChild(newTask)
      }
  
      /* Create Button */
      function createTask() {
        var taskDescription = document.getElementById("task").value
  
        if (!taskDescription) {
          return
        }
  
        createTaskElement(taskDescription)
        addTodoData(taskDescription)
      }
  
      /* Data Storage */
      function getTodoData(taskDescription) {
        var data = JSON.parse(localStorage.getItem('todoData'))
        return data ? data : [];
      }
  
      function addTodoData(taskDescription) {
        var data = getTodoData();
        data.push(taskDescription);
        var dataJson = JSON.stringify(data);
        localStorage.setItem('todoData',dataJson);
      }
      
      function removeTodoData(taskDescription) {
        var data = getTodoData();
        var index = data.indexOf(taskDescription);
        if(index >= 0){ // index -1 -> no element found
          data.splice(index, 1);   
          var dataJson = JSON.stringify(data);
          localStorage.setItem('todoData',dataJson);
        }
      }
  
      function loadTodoList() {
        var data = getTodoData();
        for (var i=0; i<data.length; i++) {
          console.log(data[i])
          createTaskElement(data[i])
        }
      }
  
  export default App;