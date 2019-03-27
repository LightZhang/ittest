<template>
  <div id="app">
    <div class="head">
      <div class="head-top">
        <Row>
          <Col span="8" style="text-align: left;">
            <img class="login-bg" src="./assets/img/logo-min.png">
          </Col>
          <Col span="10">
            <h1>鑫淳云平台管理会计理念ERP系统</h1>
          </Col>
          <Col offset="4" span="2">
            <Tag color="warning" class="basic-information">基础资料</Tag>
          </Col>
        </Row>
      </div>

      <div class="head-bottom">
        <ul class="top-menu">
          <li v-for="menu in topMenus" :key="menu.key">
            <Card>
              <h3>{{menu.name}}</h3>
            </Card>
          </li>
        </ul>
        <div class="right-select">
          <div style="width:300px;display: inline-block;">
            <Form :label-width="80">
              <FormItem label="帐套选择：">
                <Select v-model="company">
                  <Option value="上海鑫淳财务管理股份有限公司">上海鑫淳财务管理股份有限公司</Option>
                  <Option value="上海鑫淳财务管理股份有限公司">上海鑫淳财务管理股份有限公司</Option>
                  <Option value="上海鑫淳财务管理股份有限公司">上海鑫淳财务管理股份有限公司</Option>
                </Select>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="left-menu">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>Item 1
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="content-box"></div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import topmenus from "../public/static/topmenu.json";
export default {
  name: "app",
  data() {
    return {
      topMenus: [],
      company: ""
    };
  },
  created: function() {
    this.topMenus = topmenus;
  }
};
</script>

