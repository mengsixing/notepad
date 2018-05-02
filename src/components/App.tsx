import { Button, Checkbox, Col, Collapse, Icon, Input, Layout, List, Row } from 'antd';
import * as React from 'react';
import './App.css';
const { Search } = Input;
const { Panel } = Collapse;
const { Header, Content, Footer } = Layout;
import DataTable from './DataTable';
import SettingPanel from './SettingPanel';
import TodoList from './TodoList';

import { AppContext } from '../context/index';

class App extends React.Component {
  public state = {
    showPanel: false,
    showTable: false,
    toggleTable: this.toggleTable.bind(this),
  };
  constructor(defaultProps) {
    super(defaultProps);
    this.changeSettingPanel = this.changeSettingPanel.bind(this);
  }
  public gotoGithub() {
    location.href = 'https://github.com/yhlben/notepad';
  }
  public changeSettingPanel() {
    this.setState({
      showPanel: !this.state.showPanel,
    });
  }
  public toggleTable() {
    this.setState({
      showTable: !this.state.showTable,
    });
  }
  public render() {
    return (
      <AppContext.Provider value={this.state}>
        <div>
          <Layout className="main">
            <Row className="header">
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 22, offset: 1 }}
                md={{ span: 22, offset: 1 }}
                lg={{ span: 20, offset: 2 }}
                xl={{ span: 20, offset: 2 }}>
                记事本
              <div className="logo">
                  <Icon type="github" onClick={this.gotoGithub} />
                </div>
                <div className="setting">
                  <Icon type={this.state.showPanel ? 'menu-unfold' : 'menu-fold'} onClick={this.changeSettingPanel} />
                </div>
              </Col>
            </Row>
            <Content className="container">
              <AppContext.Consumer>
                {({ showTable }) => {
                  return (
                    showTable ? <DataTable></DataTable> : <TodoList></TodoList>
                  );
                }
                }
              </AppContext.Consumer>
              <SettingPanel showPanel={this.state.showPanel}></SettingPanel>
            </Content>
            <Footer className="footer">
              Created by <a target="_blank" href="https://github.com/yhlben">yhlben</a> ©2018
        </Footer>
          </Layout>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
