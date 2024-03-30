document.addEventListener("DOMContentLoaded", function() {
    const list = [];
    const activityInput = document.getElementById("input");
    const todoList = document.getElementById("todolist");
    const addButton = document.getElementById("button");
  
    addButton.addEventListener("click", function() {
      const activity = activityInput.value.trim();
      if (activity !== "") {
        list.push(activity);
        activityInput.value = "";
        showList();
      }
    });
  
    function showList() {
      todoList.innerHTML = "";
      list.forEach((activity, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = activity;
        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
          editActivity(index);
        });
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          deleteActivity(index);
        });
        
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
      });
    }
  
    function deleteActivity(index) {
      list.splice(index, 1);
      showList();
    }
  
    function editActivity(index) {
      const newValue = prompt("Please enter the new task:");
      if (newValue !== null) {
        list[index] = newValue.trim();
        showList();
      }
    }
  });  