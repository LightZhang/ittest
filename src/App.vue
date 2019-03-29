<template>
  <div id="app">
    <div class="head">
      <div class="head-top">
        <ul>
          <li>
            <img class="login-bg" src="./assets/img/logo-min.png">
          </li>

          <li>
            <img class="title-bg" src="./assets/img/title.jpg">
          </li>

          <li class="basic-li">
            <Tag color="warning" class="basic-information">基础资料</Tag>
          </li>
        </ul>
      </div>

      <div class="head-bottom">
        <ul class="top-menu">
          <li v-for="menu in topMenus" :key="menu.key">
            <Icon style="font-size:32px;" :type="menu.icon"></Icon>
            <label>{{menu.name}}</label>
          </li>
        </ul>
        <div class="right-select">
          <div style="width:400px;display: inline-block;">
            <Row>
              <Col span="8">
                <label class="lable-text">套账选择：</label>
              </Col>
              <Col span="16">
                <Select v-model="company">
                  <Option value="上海鑫淳财务管理股份有限公司">上海鑫淳财务管理股份有限公司</Option>
                  <Option value="上海鑫淳财务管理股份有限公司">上海鑫淳财务管理股份有限公司</Option>
                  <Option value="上海鑫淳财务管理股份有限公司">上海鑫淳财务管理股份有限公司</Option>
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="left-menu">
        <Menu theme="light" width="auto" :open-names="['财务管理']">
          <div class="menu-li" v-for="menu in leftMenus " :key="menu.ID">
            <Submenu :name="menu.Name" v-if="menu.Children.length>0">
              <template slot="title">
                <Icon :type="menu.Icon"></Icon>
                <label>{{menu.Name}}</label>
              </template>
              <MenuItem
                class="son-menu-li"
                :name="sonMenu.Name"
                v-for="sonMenu in menu.Children"
                :key="sonMenu.ID"
              >{{sonMenu.Name}}</MenuItem>
            </Submenu>
            <MenuItem v-else :name="menu.Name">
              <Icon :type="menu.Icon"></Icon>
              <label>{{menu.Name}}</label>
            </MenuItem>
          </div>
        </Menu>
      </div>
      <div class="content-box">
        <router-view/>
      </div>
    </div>
    <div class="bottom">
      <Row>
        <Col span="12" style="text-align: left;">用户：<label style="color:blue">admin</label></Col>
        <Col span="12" style="text-align: right;">版权为上海鑫淳财务管理股份有限公司</Col>
      </Row>
    </div>
  </div>
</template>

<script>
import topmenus from "../public/static/topmenu.json";
import leftmenus from "../public/static/leftmenu.json";
export default {
  name: "app",
  data() {
    return {
      topMenus: [],
      leftMenus: [],
      company: ""
    };
  },
  created: function() {
    this.topMenus = topmenus;
    this.leftMenus = leftmenus;
  }
};
</script>

