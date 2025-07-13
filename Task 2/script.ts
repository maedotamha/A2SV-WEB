(() => {
const taskNameInput = document.getElementById("taskName") as HTMLInputElement;
const taskDescInput = document.getElementById("taskDesc") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;
const taskForm = document.getElementById("taskForm") as HTMLFormElement;
const emptyMsg = document.getElementById("emptyMsg") as HTMLParagraphElement;


function checkIfEmpty(): void {
  const tasks = document.querySelectorAll(".task-item");
  emptyMsg.style.display = tasks.length === 0 ? "block" : "none";
}


function editTask(nameSpan: HTMLSpanElement, descDiv: HTMLDivElement): void {
  const newName = prompt("Edit Task Name", nameSpan.textContent || "");
  const newDesc = prompt("Edit Task Description", descDiv.textContent || "");

  if (newName?.trim()) {
    nameSpan.textContent = newName.trim();
  }

  if (newDesc !== null) {
    descDiv.textContent = newDesc.trim();
  }
}


function deleteTask(li: HTMLLIElement, descDiv: HTMLDivElement): void {
  const confirmDelete = confirm("Are you sure you want to delete?");
  if (confirmDelete) {
    li.remove();
    descDiv.remove();
    checkIfEmpty();
  }
}


function toggleDescription(descDiv: HTMLDivElement, button: HTMLButtonElement): void {
  const isHidden = descDiv.style.display === "none";
  descDiv.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden ? "🔼" : "🔽";
}


function addTask(): void {
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
  editBtn.onclick = () => editTask(nameSpan, descDiv);


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.backgroundColor = "#e74c3c";
  deleteBtn.onclick = () => deleteTask(li, descDiv);

  if (desc) {
    const dropBtn = document.createElement("button");
    dropBtn.textContent = "🔽";
    dropBtn.onclick = () => toggleDescription(descDiv, dropBtn);
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




})();