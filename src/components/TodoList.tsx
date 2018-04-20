import { Checkbox, Col, Collapse, Input, List , Row} from 'antd';
import * as React from 'react';
const { Search } = Input;
const { Panel } = Collapse;
import './TodoList.css';

class TodoList extends React.Component {
  public render() {
    return (
        <Row gutter={8}>
            <Col span={24} className='search-col'>
              <Search placeholder='输入待办事项' enterButton='添加' />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Collapse defaultActiveKey={['1']} className='todo'>
                <Panel header='todo' key='1'>
                  <List
                    dataSource={['item1', 'itmem2', 'zxcasfnoqnwdo年后手动']}
                    renderItem={(item) => (<List.Item><Checkbox >{item}</Checkbox> </List.Item>)}
                  />
                </Panel>
              </Collapse>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Collapse defaultActiveKey={['1']} className='doing'>
                <Panel header='doing' key='1'>
                  <List
                    dataSource={['item1', 'itmem2', 'zxcasfnoqnwdo年后手动']}
                    renderItem={(item) => (<List.Item><Checkbox >{item}</Checkbox> </List.Item>)}
                  />
                </Panel>
              </Collapse>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Collapse defaultActiveKey={['1']} className='done'>
                <Panel header='done' key='1'>
                  <List
                    dataSource={['item1', 'itmem2', 'zxcasfnoqnwdo年后手动']}
                    renderItem={(item) => (<List.Item>{item}</List.Item>)}
                  />
                </Panel>
              </Collapse>
            </Col>
          </Row>
    );
  }
}

export default TodoList;
