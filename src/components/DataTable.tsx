import { Table } from 'antd';
import * as localforage from 'localforage';
import * as React from 'react';
import { ItodoItem, ItodoList } from '../interfaces/index';
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
        localforage.getItem('todolist_state').then((state: ItodoList) => {
            const allData = [...state.doingList, ...state.todoList, ...state.doneList];
            const dataSource = allData.map((item, index) => {
                return { ...item, key: index };
            });
            this.state.dataSource = dataSource;
            // this.state.dataSource = [{
            //     title: '胡彦斌',
            //     createDate: '2010-10-10',
            //     startDate: '2010-10-10',
            //     finishDate: '2010-10-10',
            // }, {
            //     title: '胡彦祖',
            //     createDate: '2010-10-10',
            //     startDate: '2010-10-10',
            //     finishDate: '2010-10-10',
            // }];
            // console.log('allData', allData);
        });
        // this.state.dataSource = [{
        //     title: '胡彦斌',
        //     createDate: '2010-10-10',
        //     startDate: '2010-10-10',
        //     finishDate: '2010-10-10',
        // }, {
        //     title: '胡彦祖',
        //     createDate: '2010-10-10',
        //     startDate: '2010-10-10',
        //     finishDate: '2010-10-10',
        // }];
    }
    public render() {
        return (<div className="data-table">
            <Table dataSource={this.state.dataSource} columns={columns} bordered />
        </div>);
    }
}

export default DataTable;
