(function () {
    var taskNameInput = document.getElementById("taskName");
    var taskDescInput = document.getElementById("taskDesc");
    var taskList = document.getElementById("taskList");
    var taskForm = document.getElementById("taskForm");
    var emptyMsg = document.getElementById("emptyMsg");
    function checkIfEmpty() {
        var tasks = document.querySelectorAll(".task-item");
        emptyMsg.style.display = tasks.length === 0 ? "block" : "none";
    }
    function editTask(nameSpan, descDiv) {
        var newName = prompt("Edit Task Name", nameSpan.textContent || "");
        var newDesc = prompt("Edit Task Description", descDiv.textContent || "");
        if (newName === null || newName === void 0 ? void 0 : newName.trim()) {
            nameSpan.textContent = newName.trim();
        }
        if (newDesc !== null) {
            descDiv.textContent = newDesc.trim();
        }
    }
    function deleteTask(li, descDiv) {
        var confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            li.remove();
            descDiv.remove();
            checkIfEmpty();
        }
    }
    function toggleDescription(descDiv, button) {
        var isHidden = descDiv.style.display === "none";
        descDiv.style.display = isHidden ? "block" : "none";
        button.textContent = isHidden ? "🔼" : "🔽";
    }
    function addTask() {
        var name = taskNameInput.value.trim();
        var desc = taskDescInput.value.trim();
        if (!name) {
            alert("Task must have a name!");
            return;
        }
        var li = document.createElement("li");
        li.className = "task-item";
        var leftDiv = document.createElement("div");
        leftDiv.className = "task-left";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var nameSpan = document.createElement("span");
        nameSpan.textContent = name;
        var descDiv = document.createElement("div");
        descDiv.className = "task-desc";
        descDiv.textContent = desc;
        descDiv.style.display = "none";
        checkbox.addEventListener("change", function () {
            nameSpan.classList.toggle("strike", checkbox.checked);
            descDiv.classList.toggle("strike", checkbox.checked);
        });
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(nameSpan);
        var rightDiv = document.createElement("div");
        rightDiv.className = "task-right";
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = function () { return editTask(nameSpan, descDiv); };
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.style.backgroundColor = "#e74c3c";
        deleteBtn.onclick = function () { return deleteTask(li, descDiv); };
        if (desc) {
            var dropBtn_1 = document.createElement("button");
            dropBtn_1.textContent = "🔽";
            dropBtn_1.onclick = function () { return toggleDescription(descDiv, dropBtn_1); };
            rightDiv.appendChild(dropBtn_1);
        }
        rightDiv.appendChild(editBtn);
        rightDiv.appendChild(deleteBtn);
        li.appendChild(leftDiv);
        li.appendChild(rightDiv);
        taskList.appendChild(li);
        taskList.appendChild(descDiv);
        taskNameInput.value = "";
        taskDescInput.value = "";
        checkIfEmpty();
    }
    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addTask();
    });
})();
