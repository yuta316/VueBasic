<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <test-component/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//importも基本はファイル名
import TestComponent from './modules/TestComponent.vue'

//コンポーネントをエクスポートして他のファイルでインポートできるようになる
export default {
  name: 'App',
  components: {
    HelloWorld,
    //用いたいコンポーネントはこちらで登録
    TestComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
