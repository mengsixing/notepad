// 任务实例
export interface ItodoItem {
    title: string;
    createDate: Date;
    startDate?: Date;
    finishDate?: Date;
}

// TodoList组件state
export interface ItodoList {
    todoList: ItodoItem[];
    doingList: ItodoItem[];
    doneList: ItodoItem[];
}

// 设置面板props
export interface ISettingPanel {
    showPanel: boolean;
    todolistRef: any;
    dataTableRef: any;
    changeSettingPanel: () => void;
}
