<!--
 * @Description: home pinia
 * @Autor: houyueke
 * @Date: 2022-04-01 10:38:46
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-22 14:31:47
-->
<template>
  <div>
    <a-button type="primary">antd vue button</a-button>
    <div class="content">this is 首页</div>
    <h1>{{ username }}</h1>
    <h2>{{ welcomUser }}</h2>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore'
import { mapState, mapActions } from 'pinia'
import { login } from '@/api/user'
export default {
  data() {
    return {
      mapData: []
    }
  },
  computed: {
    ...mapState(useUserStore, ['username', 'welcomUser'])
  },
  mounted() {
    this.login()
    setTimeout(() => {
      this.setUserName('Dany')
      this.mapData = [
        {
          name: '北京',
          value: 54
        },
        {
          name: '南海诸岛',
          value: 2
        },
        {
          name: '天津',
          value: 16
        },
        {
          name: '上海',
          value: 40
        },
        {
          name: '重庆',
          value: 75
        }
      ]
    }, 3000)
  },
  methods: {
    async login() {
      await login({
        password: '123456',
        username: 'admin'
      })
    },
    ...mapActions(useUserStore, ['setUserName'])
  }
}
</script>

<style lang="less" scoped></style>
