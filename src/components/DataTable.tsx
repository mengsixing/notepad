import { Table } from 'antd';
import * as localforage from 'localforage';
import * as React from 'react';
import { IdataTable } from '../interfaces/index';

const columns = [{
    title: '任务名称',
    dataIndex: 'title',
}, {
    title: '创建时间',
    dataIndex: 'createDate',
}, {
    title: '开始时间',
    dataIndex: 'startDate',
}, {
    title: '完成时间',
    dataIndex: 'finishDate',
}];

class DataTable extends React.Component {
    public state: IdataTable = {
        dataSource: [],
    };
    constructor(defaultProps) {
        super(defaultProps);
        this.state.dataSource = [{
            title: '胡彦斌',
            createDate: new Date(),
            startDate: null,
            finishDate: null,
        }, {
            title: '胡彦祖',
            createDate: new Date(),
            startDate: null,
            finishDate: null,
        }];
    }
    public render() {
        return (<div>
            <Table dataSource={this.state.dataSource} columns={columns} />
        </div>);
    }
}

export default DataTable;
