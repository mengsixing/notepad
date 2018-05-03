// 任务实例
export interface ItodoItem {
    title: string;
    createDate: Date;
    startDate?: Date;
    finishDate?: Date;
    deleteDate?: Date;
    isStore?: boolean;
}

// TodoList组件state
export interface ItodoList {
    todoList: ItodoItem[];
    doingList: ItodoItem[];
    doneList: ItodoItem[];
    deleteList: ItodoItem[];
}

// 设置面板props
export interface ISettingPanel {
    showPanel: boolean;
    todolistRef: any;
    dataTableRef: any;
    changeSettingPanel: () => void;
}
