// 任务实例
export interface ItodoItem {
    title: string;
    createDate: Date;
    startDate?: Date;
    finishDate?: Date;
}

// TodoList组件state
export interface ItodoState {
    todoList: ItodoItem[];
    doingList: ItodoItem[];
    doneList: ItodoItem[];
    selectedTodoList: string[];
    selectedDoingList: string[];
}

// 设置面板props
export interface ISettingPanel {
    showPanel: boolean;
}

// DataTable组件state
export interface IdataTable {
    dataSource: ItodoItem[];
}
