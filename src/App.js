import React, { useState, useEffect } from 'react';

function App() {  
  const [taskListData, setTaskListData] = useState(getTodoData());

  useEffect(() => {
    storeTodoData();
    createTaskElements();
  }, [taskListData]);

  function getTodoData() {
    var data = JSON.parse(localStorage.getItem('todoData'))
    return data ? data : [];
  }
  function storeTodoData() {
    var dataJson = JSON.stringify(taskListData)
    localStorage.setItem('todoData',dataJson)
  }

  function createTaskElements() {
    var list = document.getElementById("taskList")
    while (list.firstChild) {
      list.removeChild(list.lastChild);
    }
    for (var i=0; i<taskListData.length; i++) {
      console.log(taskListData[i])
      createTaskElement(list, taskListData[i])
    }
  }

  function createTaskElement(list, taskDescription) {

    var newTask = document.createElement("div")
    newTask.className = "list-group-item"
    newTask.innerHTML = taskDescription

    var taskDeleteButton = document.createElement("div")
    taskDeleteButton.className = "btn btn-secondary float-end bi-x-circle"
    newTask.appendChild(taskDeleteButton)

    taskDeleteButton.onclick = function() {
      removeTask(taskDescription)
    };

    list.appendChild(newTask)
  }

  function createTask() {

    var taskDescription = document.getElementById("task").value
    if (taskListData.includes(taskDescription)) {
      return
    }
    setTaskListData([...taskListData, taskDescription])

    //addTodoData(taskDescription)
  }

  function removeTask(taskDescription) {
    if (!taskListData.includes(taskDescription)) {
      return
    }
    setTaskListData(taskListData.filter(element => element !== taskDescription))
  }

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

  export default App;