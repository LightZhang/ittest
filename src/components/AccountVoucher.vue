<template>
  <div class="account-voucher">
    <div class="btn-top-boxs">
      <Button type="warning" v-for="btn in btns" :key="btn">{{btn}}</Button>
    </div>

    <div class="btn-account-boxs">
      <Button
        :type=" btn.type!=undefined? btn.type:'warning'"
        @click="btn.click"
        v-for="btn in accountBtns"
        :key="btn.name"
      >{{btn.name}}</Button>
    </div>
    <slot></slot>
    <h1>记账凭证</h1>
    <Divider/>
    <div class="top-tip">
      <Row>
        <Col span="4">年 月 日</Col>
        <Col span="8">单据来源：</Col>
        <Col span="8">第号</Col>
        <Col span="4">附件 张</Col>
      </Row>
    </div>
    <Table :columns="columns11" :data="data10" border></Table>
    <div class="bottom-tip">
      <Row>
        <Col span="4">会计主管</Col>

        <Col span="12">
          审核:
          <label style="color:red">张三</label>
        </Col>
        <Col span="8">制单 机</Col>
      </Row>
    </div>

    <Tabs>
      <TabPane label="样板凭证" icon="logo-apple">样板凭证</TabPane>
      <TabPane label="待摊费用分摊单" icon="logo-windows">待摊费用分摊单</TabPane>
      <TabPane label="成本费用分摊单" icon="logo-tux">成本费用分摊单</TabPane>
      <TabPane label="费用预提单" icon="logo-tux">费用预提单</TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      btns: [
        "查询",
        "新增",
        "修改",
        "删除",
        "导入",
        "导出",
        "打印",
        "保存",
        "前页",
        "后页"
      ],
      accountBtns: [
        {
          name: "会计科目",
          click: ""
        },
        {
          name: "开账资料",
          click: ""
        },

        {
          name: "凭证输入",
          type: "primary",
          click: () => {
            this.$router.push({
              name: "home"
            });
          }
        },
        {
          name: "智能凭证",
          click: ""
        },
        {
          name: "凭证审核",
          type: "primary",
          click: () => {
            this.$router.push({
              name: "about"
            });
          }
        },

        {
          name: "凭证过账",
          click: ""
        },
        {
          name: "期末结账",
          click: ""
        }
      ],
      columns11: [
        {
          title: "Name",
          key: "name",
          align: "center",
          width: 200,
          fixed: "left",
          filters: [
            {
              label: "Joe",
              value: 1
            },
            {
              label: "John",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.name === "Joe";
            } else if (value === 2) {
              return row.name === "John Brown";
            }
          }
        },
        {
          title: "Other",
          align: "center",
          children: [
            {
              title: "Age",
              key: "age",
              align: "center",
              width: 200,
              sortable: true
            },
            {
              title: "Address",
              align: "center",
              children: [
                {
                  title: "Street",
                  key: "street",
                  align: "center",
                  width: 200
                },
                {
                  title: "Block",
                  align: "center",
                  children: [
                    {
                      title: "Building",
                      key: "building",
                      align: "center",
                      width: 200,
                      sortable: true
                    },
                    {
                      title: "Door No.",
                      key: "door",
                      align: "center",
                      width: 200
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Company",
          align: "center",
          children: [
            {
              title: "Company Address",
              key: "caddress",
              align: "center",
              width: 200
            },
            {
              title: "Company Name",
              key: "cname",
              align: "center",
              width: 200
            }
          ]
        },
        {
          title: "Gender",
          key: "gender",
          align: "center",
          width: 200,
          fixed: "right"
        }
      ],
      data10: []
    };
  },
  mounted() {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push({
        key: i,
        name: "John Brown",
        age: i + 1,
        street: "Lake Park",
        building: "C",
        door: 2035,
        caddress: "Lake Street 42",
        cname: "SoftLake Co",
        gender: "M"
      });
    }
    this.data10 = data;
  }
};
</script>
<style lang="less" scoped>
.account-voucher {
  .btn-top-boxs {
    position: absolute;
    right: 10px;
    top: 135px;
    .ivu-btn {
      margin: 5px;
    }
  }
  .btn-account-boxs {
    text-align: left;
    .ivu-btn {
      margin: 5px;
    }
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
  }
}
</style>
