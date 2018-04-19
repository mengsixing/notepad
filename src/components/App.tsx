import * as React from 'react';
import { Button, Row, Col, Layout } from 'antd';
import './App.css'

const Header = Layout.Header;

class App extends React.Component {
  public render() {
    console.log(Button);
    return (<div>
      <Layout>
        <Header className="header">头部</Header>
        <Layout>
          <Row className="xxxx">
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>Col</Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>Col</Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>Col</Col>
          </Row>
        </Layout>
      </Layout>

    </div>);
  }
}

export default App;
