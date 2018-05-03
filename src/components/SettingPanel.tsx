import { Button, Modal } from 'antd';
import * as localforage from 'localforage';
import * as React from 'react';
import { AppContext } from '../context/index';
import { ISettingPanel } from '../interfaces/index';
import './SettingPanel.css';

class SettingPanel extends React.Component<ISettingPanel> {
    public state = {
        showModal: false,
    };
    constructor(props) {
        super(props);
        this.clearData = this.clearData.bind(this);
        this.confirmClear = this.confirmClear.bind(this);
        this.cancelClear = this.cancelClear.bind(this);
        this.downloadData = this.downloadData.bind(this);
    }
    public clearData(event) {
        event.preventDefault();
        this.setState({
            showModal: true,
        });
        this.props.changeSettingPanel();
    }
    public confirmClear() {
        this.props.todolistRef.setState({
            todoList: [],
            doingList: [],
            doneList: [],
        });
        this.props.dataTableRef.setState({
            dataSource: [],
        });
        this.setState({
            showModal: false,
        });
    }
    public cancelClear() {
        this.setState({
            showModal: false,
        });
    }
    public downloadData() {
        const aTag = document.createElement('a');
        localforage.getItem('todolist_state').then((res) => {
            const blob = new Blob([JSON.stringify(res)]);
            const date = new Date();
            aTag.download = `notepad(${date.toLocaleDateString()}).txt`;
            aTag.href = URL.createObjectURL(blob);
            aTag.click();
            this.props.changeSettingPanel();
        });
    }

    public render() {
        return (
            <AppContext.Consumer>
                {({toggleContent}) => {
                    return (
                        <div className={this.props.showPanel ? 'setting-panel show' : 'setting-panel'} onClick={toggleContent}>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button" onClick={toggleContent.bind(this.context, 0)}>任务列表</Button></div>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button" onClick={toggleContent.bind(this.context, 1)}>数据统计</Button></div>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button" onClick={this.downloadData}>下载数据</Button></div>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button" onClick={toggleContent.bind(this.context, 2)}>导入数据</Button></div>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button" onClick={this.clearData}>清空数据</Button></div>
                            <Modal
                                title="提示"
                                visible={this.state.showModal}
                                onOk={this.confirmClear}
                                onCancel={this.cancelClear}
                            >
                                <p>确认清空数据？</p>
                            </Modal>
                        </div>
                    );
                }
                }
            </AppContext.Consumer>
        );
    }
}

export default SettingPanel;
