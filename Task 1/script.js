const taskNameInput = document.getElementById("taskName");
const taskDescInput = document.getElementById("taskDesc");
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const emptyMsg = document.getElementById("emptyMsg");

function checkIfEmpty() {
  const tasks = document.querySelectorAll(".task-item");
  emptyMsg.style.display = tasks.length === 0 ? "block" : "none";
}

function Edit(nameSpan, descDiv) {
  const newName = prompt("Edit Task Name", nameSpan.textContent);
  const newDesc = prompt("Edit Task Description", descDiv.textContent);

  if (newName !== null && newName.trim() !== "") {
    nameSpan.textContent = newName.trim();
  }

  if (newDesc !== null) {
    descDiv.textContent = newDesc.trim();
  }
}

function Delete(li, descDiv) {
  const confirmDelete = confirm("Are you sure you want to delete?");
  if (confirmDelete) {
    li.remove();
    descDiv.remove();
    checkIfEmpty();
  }
}

function Display(descDiv, dropBtn) {
  const isHidden = descDiv.style.display === "none";
  descDiv.style.display = isHidden ? "block" : "none";
  dropBtn.textContent = isHidden ? "🔼" : "🔽";
}

function addTask() {
  const name = taskNameInput.value.trim();
  const desc = taskDescInput.value.trim();

  if (!name) {
    alert("Task must have a name!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const leftDiv = document.createElement("div");
  leftDiv.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  const descDiv = document.createElement("div");
  descDiv.className = "task-desc";
  descDiv.textContent = desc;
  descDiv.style.display = "none";

  checkbox.addEventListener("change", () => {
    nameSpan.classList.toggle("strike", checkbox.checked);
    descDiv.classList.toggle("strike", checkbox.checked);
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(nameSpan);

  const rightDiv = document.createElement("div");
  rightDiv.className = "task-right";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => Edit(nameSpan, descDiv);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.backgroundColor = "#e74c3c";
  deleteBtn.onclick = () => Delete(li, descDiv);

  if (desc) {
    const dropBtn = document.createElement("button");
    dropBtn.textContent = "🔽";
    dropBtn.onclick = () => Display(descDiv, dropBtn);
    rightDiv.appendChild(dropBtn);
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
