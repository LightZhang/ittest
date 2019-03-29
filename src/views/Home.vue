<template>
  <div class="home">
<AccountVoucher>
    <h1 class="verify-h1">审核</h1>
</AccountVoucher>
  </div>
</template>

<script>
import AccountVoucher from  '../components/AccountVoucher.vue';
export default {
  name: 'home',
  components: {
    AccountVoucher:AccountVoucher
  },
  data() {

    return {
      columns11: [
        {
          title: 'Name',
          key: 'name',
          align: 'center',
          width: 200,
          fixed: 'left',
          filters: [
            {
              label: 'Joe',
              value: 1
            },
            {
              label: 'John',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.name === 'Joe';
            } else if (value === 2) {
              return row.name === 'John Brown';
            }
          }
        },
        {
          title: 'Other',
          align: 'center',
          children: [
            {
              title: 'Age',
              key: 'age',
              align: 'center',
              width: 200,
              sortable: true
            },
            {
              title: 'Address',
              align: 'center',
              children: [
                {
                  title: 'Street',
                  key: 'street',
                  align: 'center',
                  width: 200
                },
                {
                  title: 'Block',
                  align: 'center',
                  children: [
                    {
                      title: 'Building',
                      key: 'building',
                      align: 'center',
                      width: 200,
                      sortable: true
                    },
                    {
                      title: 'Door No.',
                      key: 'door',
                      align: 'center',
                      width: 200
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Company',
          align: 'center',
          children: [
            {
              title: 'Company Address',
              key: 'caddress',
              align: 'center',
              width: 200
            },
            {
              title: 'Company Name',
              key: 'cname',
              align: 'center',
              width: 200
            }
          ]
        },
        {
          title: 'Gender',
          key: 'gender',
          align: 'center',
          width: 200,
          fixed: 'right'
        }
      ],
      data10: [],

    }
  },
  mounted() {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        door: 2035,
        caddress: 'Lake Street 42',
        cname: 'SoftLake Co',
        gender: 'M',
      });
    }
    this.data10 = data;
  }
}
</script>
<style lang="less" scoped>
.verify-h1
{
  text-align: right;
  font-size: 28px !important;
  padding-right: 50px;
  font-weight: normal !important;
}
</style>
