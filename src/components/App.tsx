import { Button, Checkbox, Col, Collapse, Input, Layout, List, Row } from 'antd';
import * as React from 'react';
import './App.css';
const { Search } = Input;
const { Panel } = Collapse;
const {Header, Content, Footer} = Layout;

class App extends React.Component {
  public render() {
    return (<div>
      <Layout className='main'>
        <Header className='header'>头部</Header>
        <Content className='container'>
          <Row gutter={8}>
            <Col span={24} className='search-col'>
              <Search placeholder='输入待办事项' enterButton='添加' />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Collapse defaultActiveKey={['1']}>
                <Panel header='todo' key='1'>
                  <List
                    dataSource={['item1', 'itmem2', 'zxcasfnoqnwdo年后手动']}
                    renderItem={(item) => (<List.Item><Checkbox >{item}</Checkbox> </List.Item>)}
                  />
                </Panel>
              </Collapse>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Collapse defaultActiveKey={['1']}>
                <Panel header='doing' key='1'>
                  <List
                    dataSource={['item1', 'itmem2', 'zxcasfnoqnwdo年后手动']}
                    renderItem={(item) => (<List.Item><Checkbox >{item}</Checkbox> </List.Item>)}
                  />
                </Panel>
              </Collapse>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Collapse defaultActiveKey={['1']}>
                <Panel header='done' key='1'>
                  <List
                    dataSource={['item1', 'itmem2', 'zxcasfnoqnwdo年后手动']}
                    renderItem={(item) => (<List.Item><Checkbox >{item}</Checkbox> </List.Item>)}
                  />
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Content>
        <Footer className='footer' style={{ position: 'fixed', width: '100%', bottom: '0' }}>尾部</Footer>
      </Layout>

    </div>);
  }
}

export default App;
