import { Button, Table } from 'antd';
import * as localforage from 'localforage';
import * as React from 'react';
import { ItodoItem, ItodoList } from '../interfaces/index';
import { createDateString } from '../utils/index';
import './DataTable.css';

interface IdataTableItem {
    key: string;
    title: string;
    createDate: string;
    startDate?: string;
    finishDate?: string;
}

interface IdataTable {
    dataSource: IdataTableItem[];
}

const columns = [{
    title: '任务名称',
    dataIndex: 'title',
    key: 'title',
}, {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'createDate',
}, {
    title: '开始时间',
    dataIndex: 'startDate',
    key: 'startDate',
}, {
    title: '完成时间',
    dataIndex: 'finishDate',
    key: 'finishDate',
}];

class DataTable extends React.Component<any, IdataTable> {
    public state = {
        dataSource: [],
    };
    constructor(defaultProps) {
        super(defaultProps);
        localforage.getItem('todolist_state').then((state?: ItodoList) => {
            let allData = [];
            if (state) {
                allData = [...state.doingList, ...state.todoList, ...state.doneList];
            }
            const dataSource = [];
            for (let i = 0; i < allData.length; i++) {
                dataSource.push({
                    key: i,
                    title: allData[i].title,
                    createDate: createDateString(allData[i].createDate),
                    startDate: allData[i].startDate ? createDateString(allData[i].startDate) : '未开始',
                    finishDate: allData[i].finishDate ? createDateString(allData[i].finishDate) : '未完成',
                });
            }
            this.setState({
                dataSource,
            });
        });
    }
    public render() {
        return (<div className="data-table">
            <Table dataSource={this.state.dataSource} columns={columns} bordered />
        </div>);
    }
}

export default DataTable;
