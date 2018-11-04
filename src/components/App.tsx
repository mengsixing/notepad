import { Col, Collapse, Icon, Input, Layout, Row } from 'antd';
import * as React from 'react';
import { AppContext } from '../context/index';
import './App.css';
import DataTable from './DataTable';
import SettingPanel from './SettingPanel';
import TodoList from './TodoList';
import UploadData from './UploadData';
const { Content, Footer } = Layout;

class App extends React.Component {
  public dataTableRef = React.createRef();
  public todoListRef = React.createRef();
  public state = {
    showPanel: false,
    showTable: false,
    contentType: 0,
    toggleContent: this.toggleContent.bind(this),
  };
  constructor(props) {
    super(props);
    this.changeSettingPanel = this.changeSettingPanel.bind(this);
  }
  public setDataTableRef = (element) => {
    this.dataTableRef = element;
  }
  public setTodoListRef = (element) => {
    this.todoListRef = element;
  }
  public gotoGithub(): void {
    location.href = 'https://github.com/yhlben/notepad';
  }
  public changeSettingPanel(): void  {
    this.setState({
      showPanel: !this.state.showPanel,
    });
  }
  public toggleContent(type, e): void  {
    if (arguments.length === 1) {
      type.stopPropagation();
      this.setState({
        showPanel: !!e,
      });
    } else {
      e.stopPropagation();
      this.setState({
        contentType: type,
        showPanel: !!e,
      });
    }
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
                {({ contentType }) => {
                  switch (contentType) {
                    case 1:
                      return <DataTable ref={this.setDataTableRef}></DataTable>;
                    case 2:
                      return <UploadData></UploadData>;
                    default:
                      return <TodoList ref={this.setTodoListRef}></TodoList>;
                  }
                }
                }
              </AppContext.Consumer>
              <SettingPanel showPanel={this.state.showPanel} changeSettingPanel={this.changeSettingPanel} todolistRef={this.todoListRef} dataTableRef={this.dataTableRef}></SettingPanel>
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
