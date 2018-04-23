export interface ItodoItem {
    title: string;
    createDate: Date;
    startDate?: Date;
    finishDate?: Date;
}

export interface ItodoState {
    todoList: ItodoItem[];
    doingList: ItodoItem[];
    doneList: ItodoItem[];
    selectedTodoList: string[];
}
