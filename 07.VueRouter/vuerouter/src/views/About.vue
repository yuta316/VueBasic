<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!--ルート情報をconsoleでみる-->
    <button @click="checkRouteInfo">ルート情報</button>
    <!--ホームへ飛ばす-->
    <button @click="goToHome">Home</button>
  </div>
</template>

<script>
export default{
  name: 'About',
  methods:{
    checkRouteInfo(){
      //ルート情報
      //routeはコンポーネントのみ、routerは全体
      console.log(this.$route)
      //パスを確認できる
      console.log(this.$route.path)
      console.log(this.$router)
    },
    goToHome(){
      //プログラムの中で書く際にはrouter.pushを用いる。
      this.$router.push('/')
    }
  }
}
</script>
