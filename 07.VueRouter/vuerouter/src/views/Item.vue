<template>
  <div>Item<br>
      <!--componet内でルート作成-->
      <!--ただし同じページでのルーティングは際読み込みが行われない=ライフサイクルがない-->
      <router-link to="1">Item1</router-link><br>
      <router-link to="2">Item2</router-link><br>
      {{$route.params.id}}
  </div>
</template>

<script>
export default {
    created(){
        console.log('created')
    },
    watch: {
        //$route自体を監視する
        $route(to, from){
            console.log(to, from)
        }
    }
}
</script>

<style>

</style>