import { Checkbox, Col, Collapse, Input, List, message, Row } from 'antd';
import * as localforage from 'localforage';
import * as React from 'react';
import { ItodoItem, ItodoList } from '../interfaces/index';
import { createDateString, isInArray, removeItems } from '../utils/index';
const { Search } = Input;
const { Panel } = Collapse;
import { AppContext } from '../context/index';
import './TodoList.css';

// TodoList组件state
interface ItodoState extends ItodoList {
  selectedTodoList: string[];
  selectedDoingList: string[];
}

class TodoList extends React.Component {
  public state: ItodoState = {
    todoList: [],
    doingList: [],
    doneList: [],
    selectedTodoList: [],
    selectedDoingList: [],
  };

  constructor(defaultProps) {
    super(defaultProps);
    this.addTodo = this.addTodo.bind(this);
    this.changetodoList = this.changetodoList.bind(this);
    this.changedoingList = this.changedoingList.bind(this);
    localforage.getItem('todolist_state').then((json) => {
      if (json) {
        this.setState(json);
      }
    });
  }
  public componentDidUpdate() {
    const json = { todoList: this.state.todoList, doingList: this.state.doingList, doneList: this.state.doneList };
    localforage.setItem('todolist_state', json);
  }
  public addTodo(item: string): void {
    if (item.length === 0) {
      return;
    }
    if (isInArray(this.state.todoList, item)) {
      message.error('该任务已存在');
    } else {
      const todoItem: ItodoItem = {
        title: item,
        createDate: new Date(),
      };
      this.setState({
        todoList: [...this.state.todoList, todoItem],
        selectedTodoList: [],
      });
    }
  }
  public changetodoList(checkedArray: string[]) {
    if (isInArray(this.state.doingList, checkedArray[0])) {
      message.warn('该任务已在进行中');
      this.setState({
        selectedTodoList: [],
      });
    } else {
      const checkedTodoItem = this.state.todoList.filter((item) => {
        return item.title === checkedArray[0];
      });
      checkedTodoItem[0].startDate = new Date();
      this.setState({
        doingList: checkedTodoItem.concat([...this.state.doingList]),
        todoList: removeItems(this.state.todoList, checkedArray),
      });
    }
  }
  public changedoingList(checkedArray: string[]): void {
    const checkedDoingItem = this.state.doingList.filter((item) => {
      return item.title === checkedArray[0];
    });
    checkedDoingItem[0].finishDate = new Date();
    this.setState({
      doneList: checkedDoingItem.concat([...this.state.doneList]),
      doingList: removeItems(this.state.doingList, checkedArray),
    });
  }
  public render() {
    return (
      <Row gutter={8}>
        <Col span={24} className="search-col">
          <Search placeholder="输入待办事项" enterButton="添加" onSearch={this.addTodo} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Collapse defaultActiveKey={['1']} className="todo">
            <Panel header="todo" key="1">
              <Checkbox.Group onChange={this.changetodoList} value={this.state.selectedTodoList}>
                <List
                  dataSource={this.state.todoList}
                  renderItem={
                    (item) => (<List.Item><Checkbox value={item.title}>{item.title}</Checkbox></List.Item>)
                  }
                />
              </Checkbox.Group>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Collapse defaultActiveKey={['1']} className="doing">
            <Panel header="doing" key="1">
              <Checkbox.Group onChange={this.changedoingList} value={this.state.selectedDoingList}>
                <List
                  dataSource={this.state.doingList}
                  renderItem={
                    (item) => (<List.Item>
                      <Checkbox value={item.title}>
                        {item.title}
                      </Checkbox>
                    </List.Item>)
                  }
                />
              </Checkbox.Group>
            </Panel>
          </Collapse>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Collapse defaultActiveKey={['1']} className="done">
            <Panel header="done" key="1">
              <List
                dataSource={this.state.doneList}
                renderItem={(item) => (<List.Item>{item.title}</List.Item>)}
              />
            </Panel>
          </Collapse>
        </Col>
      </Row>
    );
  }
}

export default TodoList;
