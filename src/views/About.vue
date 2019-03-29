<template>
  <div class="about">
    <AccountVoucher>
      <h1 class="verify-h1">已审核</h1>
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
}
</script>


<style lang="less" scoped>
.verify-h1 {
  text-align: right;
  color: red;
  font-size: 28px !important;
  padding-right: 50px;
  font-weight: normal !important;
}
</style>


