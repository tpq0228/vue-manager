<template>
      <el-container class="home_container">
        <el-header>
          <div>
            <img src="../assets/logo.png" alt="">
            <span>电商后台管理系统</span>
          </div>
          <el-button type="info">退出</el-button>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu
              router
              unique-opened
              background-color="#373d41"
              text-color="#fff"
              active-text-color="#409eff">
              <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
                <template slot="title">
                  <i :class="iconsObj[item.id]"></i>
                  <span>{{item.authName}}</span>
                </template>
                  <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id">
                    <i class="el-icon-menu"></i>
                    <span>{{subItem.authName}}</span>
                  </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
</template>

<script>
    export default {
        name: 'Home',
      data() {
          return {
            menuList:[],
            iconsObj: {
              125:'iconfont icon-user',
              103:'iconfont icon-tijikongjian',
              101:'iconfont icon-shangpin',
              102:'iconfont icon-danju',
              145:'iconfont icon-baobiao'
            }
          }
      },
      created() {
          this.getMenuList()
      },
      methods:{
          async getMenuList() {
            const { data: res } = await this.$http.get('menus')
            if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
            this.menuList = res.data
          }
      }
    }
</script>

<style scoped lang="less">
.home_container{
  height: 100%;
  .el-header{
    background-color:#373D41;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 20px;
    align-items: center;
    > div{
      display: flex;
      align-items: center;
      img {
        width: 50px;
        margin-right: 30px;
      }
    }
  }
}
</style>
