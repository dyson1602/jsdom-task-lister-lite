document.addEventListener("DOMContentLoaded", () => {

  //*********DOM ELEMENTS**********//
  const taskForm = document.querySelector("#create-task-form")
  const newTaskUl = document.querySelector("#tasks")
  const newTaskDesc = document.querySelector("#new-task-description")

  console.log(taskForm)
  //*********EVENT LISTENERS**********//

  taskForm.addEventListener("submit", createNewTask)


  //*********EVENT HANDLERS**********//

  function createNewTask(event) {
    event.preventDefault()
    const task = document.createElement('li')
    task.textContent = event.target.querySelector('[name="new-task-description"]').value
    newTaskUl.append(task)

    event.target.reset()
  }



  //*********RENDER FUNCTIONS**********//




  //*********INITIALIZE***********//


























});
