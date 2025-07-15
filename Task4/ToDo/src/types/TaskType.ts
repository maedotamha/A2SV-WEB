export interface Task{
    taskName : string,
    subTasks : string[] | null,
    taskDesc : string | null,
    catagory : "Work" | "Study" | "Assignment" | "Chores" | "Other",
    done: boolean;
}