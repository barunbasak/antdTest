import React from "react";
import { Layout, Menu, Icon } from "antd";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";

import "./app-layout.css";

const { Header, Sider, Content } = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  menuItemClick = ({ item, key, keyPath }) => {
    console.log(key);
  };

  render() {
    return (
      <Router basename={"/"}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            //trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.toggle}
          >
            <div className="logo">GWL</div>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              //onClick={this.menuItemClick}
            >
              <Menu.Item key="1">
                <NavLink to="/">
                  <Icon type="user" />
                  <span>nav 1</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2two">
                <NavLink to="/two">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3three">
                <NavLink to="three">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            {/* <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header> */}
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              Content
              {/* <Route path="/" exact component={Index} /> */}
              <Route path="/two/" component={Two} />
              <Route path="/three/" component={Three} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default AppLayout;

function Two() {
  return <h1>Two</h1>;
}

function Three() {
  return <h1>Three</h1>;
}
