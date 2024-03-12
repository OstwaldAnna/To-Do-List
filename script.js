document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput"); // Получает ссылку на элемент ввода, id "taskInput", который представляет поле для ввода новых задач.
    const addTaskBtn = document.getElementById("addTaskBtn"); // Получает ссылку на кнопку id "addTaskBtn", которая представляет кнопку добавления новой задачи.
    const taskList = document.getElementById("taskList"); // Получает ссылку на элемент списка id "taskList", в который будут добавляться новые задачи.

    //Добавляет обработчик события "click" для кнопки добавления задачи. Когда кнопка нажата, выполняется функция, которая добавляет новую задачу в список.
    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    // Это функция, которая добавляет новую задачу в список дел.
    function addTask(taskText) { // Это функция, которая добавляет новую задачу в список дел.
        const li = document.createElement("li"); // Создается новый элемент списка <li>, который будет содержать задачу.
        const checkbox = document.createElement("input"); // Создается элемент <input>, который представляет собой чекбокс для отметки задачи как выполненной.
        checkbox.type = "checkbox"; 
        checkbox.addEventListener("change", function() { // Добавляется обработчик события "change" к чекбоксу. При изменении состояния чекбокса, задача помечается как выполненная или не выполненная.
            if (this.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
        const label = document.createElement("label");
        label.textContent = taskText;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete"; 
        deleteBtn.classList.add("delete-btn");// При нажатии на кнопку, соответствующая задача удаляется из списка.
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
