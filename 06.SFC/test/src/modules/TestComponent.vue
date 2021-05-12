<!--テンプレート-->
<template>
  <div>
      テストです
      {{testData}}
  </div>
</template>

<script>
//他のコンポーネントでも使えるようにする
export default {
    //nameは基本的にはファイル名と合致させる
    name:'TestComponent',
    data(){
        return{
            testData:'テストデータです'
        }
    }
}
</script>

<style>

</style>