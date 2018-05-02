import { Button } from 'antd';
import * as React from 'react';
import { AppContext } from '../context/index';
import { ISettingPanel } from '../interfaces/index';
import './SettingPanel.css';

class SettingPanel extends React.Component<ISettingPanel> {
    constructor(props) {
        super(props);
    }
    public render() {
        return (
            <AppContext.Consumer>
                {({ toggleTable }) => {
                    return (
                        <div className={this.props.showPanel ? 'setting-panel show' : 'setting-panel'}>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button" onClick={toggleTable}>数据统计</Button></div>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button">下载数据</Button></div>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button">导入数据</Button></div>
                            <div className="setting-panel-item"><Button className="setting-panel-item_button">清空数据</Button></div>
                        </div>
                    );
                }
                }
            </AppContext.Consumer>
        );
    }
}

export default SettingPanel;
