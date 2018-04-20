import { Button, Checkbox, Col, Collapse, Icon, Input, Layout, List, Row } from 'antd';
import * as React from 'react';
import './App.css';
const { Search } = Input;
const { Panel } = Collapse;
const { Header, Content, Footer } = Layout;
import TodoList from './Todolist';

class App extends React.Component {
  public gotoGithub() {
    location.href = 'https://github.com/yhlben/notepad';
  }
  public render() {
    return (<div>
      <Layout className='main'>
        <Header className='header'>记事本
          <div className='logo'>
            <Icon type='github' onClick={this.gotoGithub} />
          </div>
        </Header>
        <Content className='container'>
          <TodoList></TodoList>
        </Content>
        <Footer className='footer'>
          Created by <a target='_blank' href='https://github.com/yhlben'>yhlben</a> ©2018
        </Footer>
      </Layout>

    </div>);
  }
}

export default App;
