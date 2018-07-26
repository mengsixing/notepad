import { Button, Input, Table } from 'antd';
import * as localforage from 'localforage';
import * as React from 'react';
import { ItodoItem, ItodoList } from '../interfaces/index';
import { createDateString } from '../utils/index';
import './DataTable.css';
const { Search } = Input;

interface IdataTableItem {
    key: string;
    title: string;
    createDate: string;
    startDate?: string;
    finishDate?: string;
}

interface IdataTable {
    dataSource: IdataTableItem[];
    dataSourceOrigin: IdataTableItem[];
}

const sortDateDesc = (a, b): number => {
    const aTime = a.startDate === '未开始' ? new Date().getTime() : Date.parse(a.startDate);
    const bTime = b.startDate === '未开始' ? new Date().getTime() : Date.parse(b.startDate);
    return aTime - bTime;
};

const columns = [{
    title: '任务名称',
    dataIndex: 'title',
    key: 'title',
}, {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'createDate',
    sorter: (a, b) => Date.parse(a.createDate) - Date.parse(b.createDate),
}, {
    title: '开始时间',
    dataIndex: 'startDate',
    key: 'startDate',
    sorter: sortDateDesc,
}, {
    title: '完成时间',
    dataIndex: 'finishDate',
    key: 'finishDate',
    sorter: sortDateDesc,
}];

class DataTable extends React.Component<any, IdataTable> {
    public state = {
        dataSource: [],
        dataSourceOrigin: [],
    };
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
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
                    createDate: createDateString(new Date(allData[i].createDate)),
                    startDate: allData[i].startDate ? createDateString(new Date(allData[i].startDate)) : '未开始',
                    finishDate: allData[i].finishDate ? createDateString(new Date(allData[i].finishDate)) : '未完成',
                });
            }
            this.setState({
                dataSource,
                dataSourceOrigin: dataSource,
            });
        });
    }
    public search(key: string): void {
        const dataSource = [...this.state.dataSourceOrigin];
        const newData = dataSource.filter((item) => item.title.indexOf(key) >= 0);
        this.setState({
            dataSource: newData,
        });
    }
    public render() {
        return (<div>
            <Search placeholder="筛选关键字" enterButton="搜索" onSearch={this.search} className="search-col" />
            <Table className="data-table" dataSource={this.state.dataSource} columns={columns} bordered pagination={{defaultPageSize: 6}} />
        </div>);
    }
}

export default DataTable;
