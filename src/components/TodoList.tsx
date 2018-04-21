import { Checkbox, Col, Collapse, Input, List, message, Row } from 'antd';
import * as React from 'react';
import { ItodoItem } from '../interfaces/index';
import { isInArray, removeItems } from '../utils/index';
const { Search } = Input;
const { Panel } = Collapse;
import './TodoList.css';

class TodoList extends React.Component {
  public state = {
    todoList: [],
    doingList: [],
    doneList: [],
    selectedTodoList: [],
  };

  constructor() {
    super(null);
    this.addTodo = this.addTodo.bind(this);
    this.changetodoList = this.changetodoList.bind(this);
  }
  public addTodo(item: string): void {
    if (item.length === 0) {
      return;
    }
    if (isInArray(this.state.todoList, item)) {
      message.error('该任务已存在');
    } else {
      const todoItem: ItodoItem = {
        text: item, date: new Date().toLocaleDateString(),
      };
      this.setState({
        todoList: [...this.state.todoList, todoItem],
        selectedTodoList: [],
      });
    }
  }
  public changetodoList(checkedArray: string[]) {
    this.setState({
      doingList: checkedArray.concat([...this.state.doingList]),
      todoList: removeItems(this.state.todoList, checkedArray),
    });
  }
  public changedoingList(checkedArray: string[]): void {
    alert(checkedArray);
  }
  public render() {
    return (
      <Row gutter={8}>
        <Col span={24} className='search-col'>
          <Search placeholder='输入待办事项' enterButton='添加' onSearch={this.addTodo} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Collapse defaultActiveKey={['1']} className='todo'>
            <Panel header='todo' key='1'>
              <Checkbox.Group onChange={this.changetodoList} value={this.state.selectedTodoList}>
                <List
                  dataSource={this.state.todoList}
                  renderItem={
                    (item) => (<List.Item><Checkbox value={item.text}>{item.text}</Checkbox></List.Item>)
                  }
                />
              </Checkbox.Group>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Collapse defaultActiveKey={['1']} className='doing'>
            <Panel header='doing' key='1'>
              <Checkbox.Group onChange={this.changedoingList}>
                <List
                  dataSource={this.state.doingList}
                  renderItem={(item) => (<List.Item><Checkbox value={item}>{item}</Checkbox> </List.Item>)}
                />
              </Checkbox.Group>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Collapse defaultActiveKey={['1']} className='done'>
            <Panel header='done' key='1'>
              <List
                dataSource={this.state.doneList}
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
